# Gameplay

## Prototype around the uncertain claim

Choose the riskiest question from the brief: does the core action feel satisfying, does a choice change what happens, or can the camera make the interaction readable? State the observation that would answer it before building. Make one short repeatable encounter with ordinary input, the essential payoff and a clear way to try again.

Keep the intended camera, silhouette and mood visible at prototype fidelity. Compare meaningful alternatives when choice is the question. When the loop is the question, connect action, feedback, consequence and another action in the same artifact. Exercise repetition or interruption when they can change the claimed behavior.

For full-game and cross-disciplinary work, use [Workflow](workflow.md). For longer-session depth, use [Content](content.md).

## Tune from observable feel

Use the [feel criteria](quality.md#game-feel-and-sound) to record input availability, acknowledgment, judgment, contact, feedback and readiness for the next action. A legal input should have a readable response. Keep visible success consistent with actual rules.

Choose input buffering, forgiving windows, hit-stop, shake, secondary motion and retry timing for the genre and action. Measure their delay/duration when that helps diagnose the observed issue; preserve the player's reading and response window. Stronger feedback is useful only when its hierarchy and consequence remain clear. A quiet puzzle action and a heavy combat hit should not inherit the same preset.

When physical contact carries the outcome, align its perceptual event sequence with authoritative judgment. Delayed presentation may be intentional; avoid a visual/sound sequence that contradicts the action or blocks legal continuation unexpectedly.

## Time and boundaries

Respect the project's simulation model. Identify gameplay time, presentation time and any real-world deadline separately, and define which advance during pause, focus loss or a stall. Choose a stable step/interpolation policy where the mechanics require it; neither a browser wall-clock deadline nor one fixed frequency is a universal policy for every game.

Observe ordinary mode boundaries: loading, entering play, interruption, pause/resume, nested panels, failure/success and continuation. Clear inappropriate held input and residual effects, preserve intended progress and return to a usable state. Source inspection can reveal ownership or lifecycle faults; it does not alone establish that the transition feels correct.

## Expand to the requested game

Connect the intended entry, normal play, supporting screens and continuation through real player routes. Give loading a truthful state and actionable failures a useful return/retry. Keep identity, rules, costs and rewards coherent across transitions.

Inspect first payoff, middle and later demand using the relevant [content criteria](quality.md#content-and-experience). Expand choices and encounters around observed missing variety, pacing or motivation rather than a preset list of systems. Bring UI and visual craft references in when those concerns become active.

## Done when

- **Prototype:** the requested experiment is playable, its hypothesis has an observed answer with evidence, and the useful next decision is clear. A prototype request finishes here.
- **Build:** the connected ordinary journey meets the agreed gameplay and presentation criteria for the requested scope. Report unobserved later-session or human experience explicitly. When scripted verification is requested, adapt [journey-check](../scripts/journey-check.mjs) to the browser game or use the existing native checks; tests and builds are not automatic completion gates.
