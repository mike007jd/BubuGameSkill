// Sample frame intervals of a running browser game and print a labeled report.
// Usage: node perf-sample.mjs <url> [--start "<button name>"] [--warm 1500] [--sample 10000] [--out perf.json]
// Requires playwright in the project: npm i -D playwright && npx playwright install chromium
import fs from 'node:fs/promises';
import os from 'node:os';
import { createRequire } from 'node:module';
const { chromium } = createRequire(process.cwd() + '/')('playwright');
const args = process.argv.slice(2), url = args[0];
const opt = (name, fallback) => { const i = args.indexOf(name); return i > -1 ? args[i + 1] : fallback; };
if (!url) { console.error('usage: node perf-sample.mjs <url> [--start name] [--warm ms] [--sample ms] [--out file]'); process.exit(2); }
const warm = Number(opt('--warm', 1500)), sample = Number(opt('--sample', 10000)), out = opt('--out', 'perf.json'), start = opt('--start');
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 900 }, deviceScaleFactor: 1 });
await page.goto(url);
if (start) await page.getByRole('button', { name: start }).click();
await page.waitForTimeout(warm);
const cdp = await page.context().newCDPSession(page); await cdp.send('Performance.enable');
const before = await cdp.send('Performance.getMetrics');
const frames = await page.evaluate(ms => new Promise(resolve => {
  const values = []; let last = performance.now(), first = last;
  (function tick(now) { values.push(now - last); last = now; now - first >= ms ? resolve(values) : requestAnimationFrame(tick); })(last);
}), sample);
const after = await cdp.send('Performance.getMetrics');
const values = frames.slice(1).sort((a, b) => a - b), metric = (m, n) => m.metrics.find(x => x.name === n)?.value;
const report = {
  environment: { os: os.platform(), release: os.release(), cpu: os.cpus()[0].model, browser: browser.version(), headless: true, viewport: [1280, 900], devicePixelRatio: 1 },
  workload: `${warm} ms warmup, then ${sample} ms of play at ${url}${start ? ` after pressing "${start}"` : ''}; fill in what was on screen.`,
  frames: values.length, medianMs: values[Math.floor(values.length * .5)], p95Ms: values[Math.floor(values.length * .95)], maxMs: values.at(-1),
  over50ms: values.filter(n => n > 50).length,
  scriptSeconds: metric(after, 'ScriptDuration') - metric(before, 'ScriptDuration'),
  heapBeforeBytes: metric(before, 'JSHeapUsedSize'), heapAfterBytes: metric(after, 'JSHeapUsedSize'),
  limits: 'Headless CPU frame intervals and JS metrics only; no GPU frame time, no other devices, no long-session behavior.',
};
await fs.writeFile(out, JSON.stringify(report, null, 2)); console.log(JSON.stringify(report, null, 2)); await browser.close();
