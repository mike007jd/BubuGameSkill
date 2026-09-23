---
name: bubu-game
description: Develop game concepts from reference images or Codex image generation, test playable prototypes, and build or polish browser games. Use for game concept art, core gameplay, UI/UX, visuals, and VFX.
---

# Bubu Game

Coordinate the requested stage: concept, prototype, build, or polish. Start a new idea with a visual direction; add a playable experiment for prototype and full-build requests. Continue existing work from its current stage. Complete the stage the user requested. Carry a full-game request through the stages it needs, reusing established decisions and artifacts.

## Route the work

Read the reference relevant to the current action; load another when its concern becomes active.

| Request | Reference |
| --- | --- |
| Reference images, concept art, visual exploration, image generation | [Concept](references/concept.md) |
| Playable prototype, full build, gameplay changes | [Gameplay](references/gameplay.md) |
| Intuitive interactions, concise UI, onboarding | [UI/UX](references/ui-ux.md) |
| Art, camera, materials, lighting, VFX, sound, post-processing | [Visuals](references/visuals.md) |

Set a concrete bar: the gameplay brief's verb and core loop, an inspectable visual or playable reference, and the stage's "Done when" list from its reference, written as pass/fail criteria before building. For an underspecified brief, choose a direction and state assumptions. Ask when a consequential decision needs the user's input.

Use the existing stack; default new code to Vite + TypeScript with rendering suited to the interaction. Check version-sensitive APIs against installed packages and current official documentation. Performance is not a concern while the game is unfinished; look at it only when the user reports stutter.

## Bubu Playtest Loop

1. Play the core journey in the running game and look at the actual pixels, motion and sound.
2. Fix the biggest gap, run the directly affected tests and build, and keep going.
