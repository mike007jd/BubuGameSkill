# UI/UX

Use the [player-journey criteria](quality.md#player-journey-and-ui): discoverability, readable/reachable actions, honest state, continuity and contextual teaching. Judge through the normal journey, not a screen inventory.

## Make the next action apparent

Answer the player's current question beside the relevant action: where to act, what changed or what to choose. Give a screen a clear primary action. Use actual previews, meaningful icons, concise labels and visible selected/available states. Keep preview, selection and commitment distinct when browsing should not change the loadout or start play.

Reveal rules at the decision that needs them. Inspect a first-time route for missing explanation and repeated mistakes for useful help. Teach an optional mechanic after a relevant event when that improves comprehension. A text-heavy interface may need better information hierarchy, not simply deleting text or replacing every label with an icon.

## Keep visible and actionable state aligned

Show the chosen character/item when entering play and keep a truthful transition until it is ready. Preserve costs, availability, legal actions and the active turn from authoritative state. A loader should explain a handover, not hide an incorrect visible identity.

In 3D board/tactics interfaces, derive markers and click destinations from the same legal-action set. Give valid destinations priority over incidental model picking and clear overlapping labels while preserving useful target identity. Recompute when the camera or viewport changes.

## Inspect the return journey

Follow entry, HUD, pause/details, results and relevant inventory/shop back to play or retry. Check focus return, held inputs, pause/progress, selected state and loading readiness. Stylized controls should remain recognizable at the ordinary camera and device.

Use comfortable touch targets and visible keyboard focus. Retain readable text contrast, pair essential color signals with another cue, and offer sound/reduced-motion behavior appropriate to the game. Inspect actual sizes and overlap on the relevant device/view; CSS dimensions are not a universal native-unit prescription.

## Done when

The intended player can discover the core action, understand its consequence and continue through the requested journey. Record which routes/inputs were observed, whether feedback came from an agent or a human, and what remains unknown. Use [Workflow](workflow.md) for revisions spanning gameplay and art.
