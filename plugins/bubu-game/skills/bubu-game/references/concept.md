# Concept

Reuse an established direction when continuing a project. For a new idea, write the gameplay brief and the visual direction together; a concept that only looks good has answered half the question.

## Gameplay brief

Fill each line in one sentence:

- **Verb**: the one input the player repeats (steer, throw, place, dodge).
- **Fantasy**: what the player feels they are doing in the world.
- **Core loop**: action → immediate feedback → consequence → reason to act again, at the game's intended interaction timescale.
- **Fail state**: what ends or costs a round, visible before it happens.
- **Progression**: what changes across attempts (speed, density, unlocks, score target).
- **Session**: intended session length and where the first payoff and later demands occur.
- **Moment**: the single frame worth showing, as an image and as a sentence.

## Reference images

Inspect the actual images and identify their camera, silhouettes, palette, materials, lighting, and UI hierarchy. Assign each image a role when several are supplied (mood, character, UI, VFX). Translate the defining qualities into concrete scene targets: camera angle and distance, hero silhouette size on screen, palette and accent roles, key light direction, and HUD placement. Carry those targets into the requested prototype or build. For a text-only brief, write the same targets from the gameplay brief.

When several reference views describe one explorable place, reconcile them into a connected layout with reachable paths and local interaction points. Use the relevant [visual quality criteria](quality.md#visuals) to judge the actual scene, separately from the attractiveness of its concept image.

## Codex image generation

When creating new concept images in Codex, use built-in Image Gen and its imagegen skill. Follow the current tool schema and inspect local input images before editing. Frame a plausible gameplay view: readable subjects, usable play space, clear lighting, and room for the essential HUD. Express subjects, composition, style, and interactions positively. Generate one direction; add one variant only when a decision needs comparison.

Show and inspect the actual output. Refine the largest mismatch in legibility, identity, or support for the verb. Copy selected images into the workspace and record paths and prompts. If generation is unavailable, deliver the image brief and mark images pending.

For a full-game request or a revision across gameplay and art, continue through [Workflow](workflow.md) from the current stage.

## Done when

- Gameplay brief complete; every line names something observable in play.
- Visual direction with scene targets; images included when requested.
- Direction choices presented when the user must decide.
- For prototype or build requests, continue into the playable experiment and compare its actual frames with the targets.
