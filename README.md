# Bubu Game

**One compact skill for beautiful, satisfying web games.**

Build the playable foundation, give it a distinctive visual identity, and refine the real experience with the **Bubu Playtest Loop**. Works with Codex and Claude Code.

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
Use $bubu-game to build a small night-market delivery game.
Make the driving feel satisfying and the street lighting memorable.

Use $bubu-game to make this game's interface intuitive and concise.
Use visual choices and teach through actions.

Use $bubu-game to improve frame pacing while preserving the current
resolution, visual detail, effects, and simulation behavior.
```

For Claude Code, use the invocation belonging to your installation method followed by the same request.

The defaults are Vite + TypeScript for new projects, the existing stack for ongoing work, and rendering chosen around the game. Visual quality comes first; performance improvements preserve the chosen treatment and report measured trade-offs. The agent follows the user's language and task scope.

The loop is **play → inspect → improve → verify**. At a complete playable version and important polish milestones, a fresh reviewer inspects the actual artifact against explicit criteria. Iteration ends when the requested criteria pass, or hands over specific remaining work at a user budget limit or external blocker. Browser access and delegation use capabilities already available in the host; evidence identifies any outstanding checks.

## 中文

**一个精简 skill，把游戏做得好看、好玩、容易上手。**

上方推荐命令会将同一份 skill 安装到 Codex 与 Claude Code。Codex 使用 `$bubu-game`；Claude 通过 skills CLI 安装后使用 `/bubu-game`，通过原生插件安装后使用 `/bubu-game:bubu-game`。更新命令见各安装方式。

适合从零开发游戏，也适合继续打磨现有项目的玩法、UI/UX、镜头、VFX、后处理与性能。新项目默认 Vite + TypeScript，已有项目沿用原栈。默认画质优先，性能优化围绕实际瓶颈展开，并保留选定的视觉效果。

例如：

```text
用 $bubu-game 做一个小型雪地探索游戏，让足迹和抖雪成为有趣的交互。
用 $bubu-game 打磨这个游戏的 UI，用图像、短标签和操作反馈帮助玩家理解。
用 $bubu-game 保留当前画质优化性能，提交相同机位和设置下的实测对照。
```

Bubu Playtest Loop 从正常入口实玩，每轮修复最影响体验的差距，并在关键阶段加入独立评审。达到目标后结束；预算到限或遇到外部阻塞时，交付成果、证据和明确的后续事项。自动检查、代理试玩和真人反馈按实际来源记录。

## Contents and sources · 内容与来源

- [SKILL.md](plugins/bubu-game/skills/bubu-game/SKILL.md): the complete workflow / 完整工作流程。
- [Craft reference](plugins/bubu-game/skills/bubu-game/references/craft.md): presentation, interaction, and performance recipes, loaded when relevant / 按需读取的打磨参考。
- One shared skill, two thin plugin manifests, and installation metadata / 一份技能正文、两端轻量插件包装。

The craft lessons come from the author's Storm-Race, dustwake, Vibe Basketball, cavy-cottage, Dragon River Xiangqi, Qingming Riverside, and bearsnow projects. Qingming and bearsnow contribute visual/simulation and profiling lessons; their performance work is ongoing. The public package contains distilled instructions and general examples.

Independent artifact review and reference comparison were informed by [Matt Shumer's explanation of the Gauntlet Loop](https://somethingbig.ai/gauntlet-loop). Bubu's instructions are written around these game-development experiences and its own scope-aware playtest workflow. Packaging follows the [Agent Skills specification](https://agentskills.io/specification), [skills CLI](https://github.com/vercel-labs/skills), and [Claude plugin documentation](https://code.claude.com/docs/en/plugins).

MIT · v0.1.0
