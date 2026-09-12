// Template: scripted normal journey through a browser game. Copy into the project, replace every TODO
// with the game's real selectors and expectations, keep one assertion per observable rule.
// Run: node journey-check.mjs <url>   (needs playwright: npm i -D playwright && npx playwright install chromium)
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { createRequire } from 'node:module';
const { chromium } = createRequire(process.cwd() + '/')('playwright');
const url = process.argv[2] ?? 'http://127.0.0.1:5173', shots = 'output/journey';
await fs.mkdir(shots, { recursive: true });
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } }), errors = [];
page.on('pageerror', e => errors.push(String(e)));
const mode = () => page.locator('body').getAttribute('data-mode'); // TODO: expose game mode on an element attribute

await page.goto(url);
assert.equal(await mode(), 'title');
await page.screenshot({ path: `${shots}/01-title.png` });

await page.getByRole('button', { name: 'Start' }).press('Enter'); // TODO: real primary action name
assert.equal(await mode(), 'playing');

// TODO: perform the core action once and assert the authoritative outcome changed, e.g. score 0 -> 1
await page.waitForTimeout(2000);
await page.screenshot({ path: `${shots}/02-core-action.png` });

// Wall-clock rule: a 2.1 s main-thread stall must still advance game time.
const before = Number(await page.locator('#time').textContent()); // TODO: timer element
await page.evaluate(() => { const end = performance.now() + 2100; while (performance.now() < end) {} });
await page.waitForTimeout(100);
assert.ok(Number(await page.locator('#time').textContent()) <= before - 2, 'game time advances through a stall');

// Pause freezes everything; held input is cleared at the boundary.
await page.keyboard.down('ArrowRight'); await page.waitForTimeout(200);
await page.keyboard.press('Escape'); await page.keyboard.up('ArrowRight');
assert.equal(await mode(), 'paused');
const frozen = await page.locator('#hud').innerText(); // TODO: HUD element
await page.waitForTimeout(1200); assert.equal(await page.locator('#hud').innerText(), frozen);
await page.screenshot({ path: `${shots}/03-paused.png` });

// Focus loss pauses; resume works.
await page.keyboard.press('Escape'); assert.equal(await mode(), 'playing');
await page.evaluate(() => window.dispatchEvent(new Event('blur'))); assert.equal(await mode(), 'paused');
await page.keyboard.press('Escape');

// Results agree with displayed score; replay resets state.
await page.locator('body[data-mode="results"]').waitFor({ timeout: 30000 }); // TODO: or drive to a fail state
await page.screenshot({ path: `${shots}/04-results.png` });
await page.getByRole('button', { name: 'Play again' }).click(); // TODO
assert.equal(await mode(), 'playing');

assert.deepEqual(errors, []);
await browser.close(); console.log('PASS journey; screenshots in', shots);
