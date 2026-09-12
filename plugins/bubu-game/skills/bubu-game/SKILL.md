---
name: bubu-game
description: Develop game concepts from reference images or Codex image generation, test playable prototypes, and build or polish browser games. Use for game concept art, core gameplay, UI/UX, visuals, VFX, and performance work.
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
| Frame pacing, loading, resource use | [Performance](references/performance.md) |

Set a concrete bar: the core action and payoff, an inspectable visual or playable reference, and observable completion criteria for this stage. For an underspecified brief, choose a direction and state assumptions. Ask when a consequential decision needs the user's input.

Use the existing stack; default new code to Vite + TypeScript with rendering suited to the interaction. Check version-sensitive APIs against installed packages and current official documentation. Prioritize the chosen visual quality and measure performance in the actual running game. Label targets, historical measurements, and current results separately.

## Bubu Playtest Loop

Apply this loop to playable prototypes, builds, and polish. Evaluate concept images using the concept reference's visual checks.

1. Enter normally, perform the core journey, and inspect actual pixels, continuous actions, and sound against the bar.
2. Improve the largest concrete gap as one coherent batch. Then run affected existing checks and the necessary build or smoke test.
3. At the first complete playable version and important polish milestones, delegate to a fresh reviewer with the goal, criteria, reference, and actual artifact as its complete context. Request independent observations from the running game. Use anonymous A/B when comparable artifacts permit it.
4. Feed findings into the next batch until the stage's criteria pass. At a user budget limit or external blocker, deliver the current artifact, evidence, and remaining gap.

Use existing browser, test, and delegation capabilities. When a tool is unavailable, complete accessible checks and specify what remains unverified. Distinguish scripted checks, agent play, human feedback, and concept images. Keep evidence in the project's existing progress record, adding one short record when needed.
