# Bubu Game

**One compact skill for beautiful, satisfying games.**

Develop the requested concept, prototype, build, or polish stage with general game-quality criteria and a practical production workflow. Installs in Codex and Claude Code.

## Install

Choose the skill installation or your host's native plugin installation.

### Shared skill · recommended

```sh
npx skills add mike007jd/BubuGameSkill --skill bubu-game -a codex claude-code -g
```

The [skills CLI](https://github.com/vercel-labs/skills) is distributed through npm and installs this repository's skill for both agents. For a project-local installation, omit `-g`.

Invoke `$bubu-game` in Codex or `/bubu-game` in Claude Code. Update with `npx skills update bubu-game -g`.

### Codex plugin

```sh
codex plugin marketplace add mike007jd/BubuGameSkill
codex plugin add bubu-game@bubu-game
```

Start a new task and use `$bubu-game`. To update, run `codex plugin marketplace upgrade bubu-game`, then `codex plugin add bubu-game@bubu-game`.

### Claude Code plugin

```sh
claude plugin marketplace add mike007jd/BubuGameSkill
claude plugin install bubu-game@bubu-game
```

Invoke `/bubu-game:bubu-game`. Update with `claude plugin marketplace update bubu-game`, then `claude plugin update bubu-game@bubu-game`. Run `/reload-plugins` in Claude Code to load the update.

## Use it

```text
Use $bubu-game to build this game from the existing brief and references.
Set observable targets for the ordinary gameplay view and core player loop.

Use $bubu-game to critique the visual quality of this running game.
Judge composition, identity, materials, camera, effects and continuous motion.

Use $bubu-game to improve content depth and game feel.
Find the largest gap in meaningful choices, payoff, pacing or feedback first.

Use $bubu-game to organize production across gameplay, art and UI.
Split independent work, integrate generated assets and finish the requested scope.
```

For Claude Code, use the invocation belonging to your installation method and provide the same brief or reference images.

The skill keeps one compact entrypoint. [Quality](plugins/bubu-game/skills/bubu-game/references/quality.md) provides **27 selectable criteria**: visuals (9), content/experience (8), feel/sound (5), player journey/UI (5). Each criterion names observable evidence and failure signals. Targets belong to the game, viewport, interaction and accepted direction; there is no universal screen ratio, timing, win rate or review score.

[Workflow](plugins/bubu-game/skills/bubu-game/references/workflow.md) connects current-state diagnosis, direction, a representative playable slice, owned parallel production, source/asset integration, correction and delivery. Enter at the current stage; a narrow fix does not need the whole process. An existing direction stays in force until actual feedback changes it.

The Bubu Playtest Loop is inspect the ordinary experience → fix the largest observed gap → inspect the affected result. Pixels, continuous motion, listening and player behavior answer different questions. Source checks and scripted routes are useful evidence, while human understanding and enjoyment remain separate observations. Tests and builds run when the user requests them; independent critics and full-run matrices are not automatic gates.

New browser games default to Vite + TypeScript. Existing browser/native projects keep their stack. The craft references supply focused guidance for concept, gameplay, content, UI and visuals; engine migrations, publishing and extra systems are not implied by a quality task.

## 中文

一个入口，按当前阶段把游戏做到用户要求的程度。通用标准覆盖画面、内容与体验、手感与声音、UI旅程，写清楚看什么、怎么观察、怎样发现不足，不把某个项目的7.5/8分、屏占比、秒数或胜率推广成所有游戏门槛。

工作流从现有产物继续：定位实际差距 → 明确方向和可观察目标 → 做代表性可玩切片 → 独立部分并行 → 整合源码、生成资产和普通入口 → 修最大问题 → 完成完整需求 → 交付或从真实断点续接。已定方向沿用，小改不强制跑整套流程。测试/build按用户请求，默认不要求独立评审、长审计或重复全量验收。


## Contents

- [SKILL.md](plugins/bubu-game/skills/bubu-game/SKILL.md): stage scope and routing.
- [Quality](plugins/bubu-game/skills/bubu-game/references/quality.md): criteria, observation methods and evidence limits.
- [Workflow](plugins/bubu-game/skills/bubu-game/references/workflow.md): production outputs, integration and correction.
- [Concept](plugins/bubu-game/skills/bubu-game/references/concept.md), [Gameplay](plugins/bubu-game/skills/bubu-game/references/gameplay.md), [Content](plugins/bubu-game/skills/bubu-game/references/content.md), [UI/UX](plugins/bubu-game/skills/bubu-game/references/ui-ux.md), [Visuals](plugins/bubu-game/skills/bubu-game/references/visuals.md): craft references loaded as relevant.
- [Journey template](plugins/bubu-game/skills/bubu-game/scripts/journey-check.mjs): browser route template, adapted and run only when appropriate and requested.

One shared skill, thin Codex/Claude plugin packaging. MIT · v0.4.0
