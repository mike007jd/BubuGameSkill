---
name: bubu-game
description: Build or refine browser games with distinctive art, satisfying controls, intuitive interfaces, and evidence-led playtesting. Use for a new web game, a playable prototype, or targeted gameplay, UI/UX, VFX, post-processing, and performance improvements.
---

# Bubu Game

Make a game whose central interaction feels good and whose real gameplay view is worth showing. Work directly on the requested game, carrying the task through implementation and playtesting. Scale the work to the user's scope. Use the existing stack; for a new project, default to Vite and TypeScript and choose DOM, Canvas, PixiJS, or Three.js around the experience. Verify version-sensitive APIs against the installed package and current official documentation.

## Shape the experience

Identify the player's central action, its observable payoff, and the reason to keep playing or exploring. Choose one representative moment that expresses the game's identity. For an underspecified brief, propose a concrete direction and proceed with stated assumptions; ask when a consequential preference needs the user's decision.

Inspect a relevant playable or visual reference and the project's current output. Establish observable acceptance criteria for the requested scope: actions the player can complete, visual qualities visible at gameplay distance, and the device and resolution for measurement. Treat reference images as direction for original work. Keep targets, historical results, and current observations clearly labeled.

## Build the playable foundation

Complete the smallest satisfying journey: entry, core action, feedback, pause/resume, and replay or continued exploration. Establish clear ownership of simulation state, rendering, input, and UI. Reuse existing functions and platform features. Drive animation and physics with an explicit time policy; test pause and recovery across focus changes. Clear held inputs at mode boundaries and release session resources when restarting or switching scenes.

Show loading progress, actionable failures, and retry. Make feedback agree with authoritative game events: a displayed success corresponds to the actual outcome. Validate persistent progress and repeated settlement when the game uses them. Expand content once the central interaction and journey work.

## Give it character

Polish the hero subject, gameplay camera, silhouettes, materials, and lighting first. Keep the player, hazards, and interactable objects legible in motion and at the edges of the playable area. Connect animation, sound, particles, environmental response, and camera accents to the action's timing and consequence. Tune intensity to the game's mood.

Give each screen a clear primary action. Use real previews, recognizable icons, short labels, and immediate state changes; reveal detailed explanations when requested or relevant. Teach through successful actions. Preserve readable contrast, accessible names, keyboard focus, comfortable targets, and motion controls. Evaluate both the quiet scene and its busiest interaction.

## Finish the picture

Prioritize the chosen visual quality. Build a coherent treatment with appropriate tone mapping, contact shadows, restrained highlight glow, atmosphere, and deliberate depth of field. Keep gameplay-critical information sharp. Read [the craft reference](references/craft.md) when refining presentation, interaction clarity, or performance.

Profile before optimizing. Preserve the agreed visual treatment while reducing repeated rendering, synchronous readbacks, unnecessary updates, and resource churn. Compare matching cameras, animation states, resolution, and settings. Report frame-time distribution and visible quality together. Present any remaining quality/performance trade-off for the user's choice.

## Bubu Playtest Loop

1. Run from the normal entry. Exercise the core journey with ordinary input and inspect screenshots, continuous motion, and sound. Use project checks to support what was observed.
2. Identify the largest concrete gap against the acceptance criteria. Fix a coherent batch, then run the affected existing checks and necessary build or smoke test.
3. At the first complete playable version and significant polish milestones, use one fresh, independent reviewer. Give it the task, acceptance criteria, reference, and actual artifact as its complete brief. Have it inspect the running game and return reproducible observations. Use anonymous A/B presentation when comparable artifacts permit it.
4. Feed the important findings into the next batch. Reuse project tooling and host-native delegation. When a capability is unavailable, complete accessible checks and identify the exact remaining verification. Label scripted checks, agent play, and human feedback by their actual source.
5. Continue until the requested criteria pass. At a user budget limit or an external blocker, hand over the working result, evidence, and specific remaining gap. Keep a compact record in the project's existing progress document, or create one short record when needed.
