# Gameplay

## Prototype

Choose the riskiest question from the gameplay brief: does the verb feel satisfying, does a choice change the outcome, does the camera make interaction readable. State the observation that would answer it before building. Build one short repeatable encounter with ordinary input, immediate feedback, and instant retry. Keep the concept's camera, silhouette, and mood visible at prototype fidelity.

Test a small set of meaningful choices when choice is the hypothesis: two or three options whose outcomes visibly differ. When the loop is the hypothesis, connect action, feedback, growth, and another attempt in one build. When physical contact is the hypothesis, make input, contact animation, sound, and the authoritative outcome fire on the same frame. Exercise repeated, interrupted, and overlapping actions.

## Feel numbers

Start from these and tune by playing; record the final values.

| Concern | Starting value |
| --- | --- |
| Time to first meaningful feedback after entry | ≤ 3 s |
| Input buffer (press accepted slightly early) | 100–150 ms |
| Coyote time (act slightly after leaving ground/edge) | 80–120 ms |
| Hit-stop on impactful contact | 50–120 ms |
| Screen shake | ≤ 6 px, decays in 150–300 ms |
| Squash/stretch on impact or launch | 10–20 %, returns in 100–200 ms |
| Retry after fail | ≤ 1 s, one press |
| Difficulty ramp | a new pressure every 20–40 s of play |

## Time policy

Simulate on a fixed step with an accumulator (1/60 s; clamp a single frame's elapsed time to 0.25 s so a stall never explodes the simulation) and render the interpolated state. Round timers, spawn clocks, and deadlines advance on elapsed wall-clock time so a stalled tab still ends the round on schedule. Cosmetic animation may use the clamped frame delta.

## Build

Expand the proven interaction into entry, core play, pause/resume, and replay or continued exploration. Give simulation state, input, rendering, and UI clear ownership: one module owns game state and is the only writer. Clear held inputs at every mode boundary; pause on focus loss; release audio, timers, and GPU resources on restart or scene replacement.

Show loading progress, actionable failures, and retry. Keep displayed success consistent with the actual rules. For persistent progress or rewards, validate saved data and repeated settlement. Nested panels (inventory inside pause, shop inside inventory) return to play with the pause and progress state the player expects; own that state in one place.

Bring in UI, visual, and performance references as those concerns become active.

## Done when

- **Prototype**: a playable artifact, the observed answer to the hypothesis with evidence, tuned feel numbers, and the most useful next decision. A prototype request ends here.
- **Build**: the full journey passes a scripted run of [journey-check](../scripts/journey-check.mjs) adapted to the game, plus the Bubu Playtest Loop at the agreed bar.
