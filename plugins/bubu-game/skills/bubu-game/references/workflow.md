# Game development workflow

Use for full-game work and revisions spanning gameplay, art, UI or production. Enter at the current stage and complete the requested scope. Reuse the accepted direction and working implementation. The stages below describe useful outputs and decisions; a narrow fix does not need a new design phase or a full review ceremony.

## 1. Read the product, then choose the problem

Start with the current brief, ordinary entry and available artifacts. For an existing game, locate the player's complaint in an actual state or action before planning a replacement. A source audit reveals wiring and gaps; pixels, motion, sound and play reveal the delivered experience. Use the evidence available and name what has not been observed.

Translate the request into a small set of targets from [Quality](quality.md): intended player action, visible result, representative conditions and a comparison or observable completion criterion. Keep the supplied aesthetic and scope authoritative. Ask only for missing decisions that block meaningful progress; choose routine implementation details.

**Output:** a prioritized gap list and the current baseline. The largest gap should be identifiable in the product, not merely a missing subsystem on paper.

## 2. Establish the direction at game scale

For a new direction, combine the gameplay brief with visual reference roles: composition, character identity, materials, lighting, UI and motion. An image that sells a mood is a target, not a substitute for a renderable scene or playable space. Choose the intended game camera and representative viewport early.

Use a small sample to resolve the uncertain direction. Once accepted, carry it across relevant surfaces instead of repeatedly asking for style approval. If the user rejects the fundamental look or interaction, update that direction and its acceptance target; further polishing the rejected design will not close the gap.

**Output:** a concrete visual/interaction target and enough in-engine or playable evidence to show the intended relationship between art and play. A concept-only request can finish with its concept deliverable.

## 3. Build a representative complete slice

Connect one ordinary entry, the core action, its consequence and the next action or retry. Include the essential payoff, interaction explanation and state transition at prototype fidelity. Make the slice representative of the game's promise: ordinary attack as well as the spectacular move, usable exploration as well as the view, a meaningful decision as well as its menu.

Judge the riskiest claim first. Define the expected observation before adding a roster, many levels or polished supporting screens. A prototype request ends when that question has an observed answer and a clear next decision; a full-game request continues.

**Output:** one repeatable slice whose gameplay and visual intent can be assessed together. When direct play is unavailable, say which claim remains unobserved and continue work that does not depend on it.

## 4. Split production around owned outputs

When parallel work is authorized, split independent concerns into lanes with a shared baseline, target and clear file/asset ownership. Each lane needs its input, expected delivered behavior, interfaces with neighbors and handoff artifact. Identify shared renderers, themes, data contracts and generated assets before dispatching; schedule their integration under one owner.

Use isolated worktrees/checkouts when the repository and tools warrant them. Parallelize reading and independent edits, while coordinating shared mutations, imports, generation and capture. Bound concurrent heavy tools to host capacity. Follow the user's chosen host/resource policy; adding agents should not multiply contention on the active computer.

**Output:** compatible source and asset changes ready to integrate, with unresolved dependencies and verification status explicit. A lane's completion report is not the integrated product.

## 5. Integrate source, assets and the ordinary route

Merge the work and resolve shared-file conflicts before judging the combined result. Follow each change through source → generator/authoring input → built asset/resource → scene binding → ordinary player trigger. Regenerate affected assets when needed; editing a generator or model script alone leaves the delivered game unchanged.

Check state handovers, selected identity, actual effect triggers and shared visual language across the normal journey. Use forced/debug states to isolate a problem, then inspect the ordinary route when that route is part of the authorized work. Record any assisted setup; an unreachable showcase does not prove the player will encounter its content.

**Output:** one integrated artifact and a concise mapping from the requested targets to actual delivered surfaces/actions.

## 6. Inspect, prioritize and correct

Compare matching views and states against the target. Use continuous motion for animation/camera/effects and actual listening for sound. Inspect both normal and problem-revealing conditions, such as crowd density, action peaks, small viewports or repeated input.

Fix the most consequential observed gap and inspect that change again. Diagnose which layer causes it before adding more effects or detail. Use alternate layers/views to isolate saturation, occlusion, geometry or timing only when they help answer the current question. Keep art-only work from silently changing collision, formation, speed, scoring or other rules.

Separate levels of evidence. A controller can reveal timing, reachability and reproducible trends; it does not establish what a newcomer understands or whether a person wants another run. Explain a score with visible findings and the comparison standard. Independent perspectives are useful when requested or when a genuine cross-disciplinary uncertainty warrants them; they are not a default gate for every revision.

**Output:** corrected high-impact gaps, observed before/after behavior and a factual remaining list. Honor the user's quality bar and budget; do not invent a stricter score threshold or iterate indefinitely over acceptable differences.

## 7. Expand through the actual experience

Grow content around the validated interaction and the relevant quality criteria. Examine how choices, variety, payoff and pressure evolve through the session, not just the first polished minute. Prefer changes that answer the identified lack of variety or motivation over adding counts indiscriminately.

Preserve the established feedback cadence when rebuilding or reskinning unless changing it is part of the request. Keep entry, loading, menus, play, results and continuation coherent. Long-session, device or human observations should be requested or already authorized, and kept separate from existing historical evidence.

**Output:** the requested scope works as a connected experience, with missing ordinary routes or later-session evidence named specifically.

## 8. Deliver without losing the useful context

Provide the playable/source artifact, what changed, why it improves the observed issue, evidence actually obtained and the remaining actionable work. A continuation handoff identifies the current files/state, accepted direction, unfinished integration and the next concrete action; it should not require replaying the entire history.

Run tests and builds only when the user requests them. When authorized, choose checks suited to the changed behavior, and broaden them for a concrete new concern or a requested integration milestone. A routine local change does not automatically justify a full campaign, repeated benchmarks or a new audit cycle.

Cleanup, commits, publishing and distribution follow the user's task scope. Keep process mechanics in the development handoff, not in the game's player-facing interface.
