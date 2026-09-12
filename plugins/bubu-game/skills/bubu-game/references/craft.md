# Craft reference

Read the sections relevant to the current task. Apply the lessons to the game's own style, scale, and supported inputs.

## Lessons from shipped work and continuing projects

| Project | Transferable move | Evidence to seek |
| --- | --- | --- |
| Storm-Race | Give a small set of actions meaningful timing and trade-offs. Show equipment through actual model previews and clear preview/equipped states. | The player can identify a useful choice and see its consequence in ordinary play. |
| dustwake | Connect action, feedback, growth, and the next attempt. Let the camera follow the player's usable space. | Play at arena edges; identify threats and upgrade choices during a busy encounter. |
| Vibe Basketball | Align input, animation contact, sound, and the rule outcome. | A shot's displayed result agrees with the eventual score; pause and restart preserve input semantics. |
| cavy-cottage | Give navigation, pause, and game state clear ownership. Reveal rich systems through context and progressive detail. | Open nested panels, return to play, and repeat an interaction while progress remains consistent. |
| Dragon River Xiangqi | Judge pieces and themed controls at the normal gameplay camera. | Identify sides, piece roles, legal actions, and the active turn at the supported viewport sizes. |
| Qingming Riverside | Make scene composition, materials, light, water, and grading express one art direction. | Compare matching views and moving cameras after an optimization. |
| bearsnow | Make fine visual detail respond to the player: persistent tracks, contact, fur, and displaced snow. | Inspect a continuous action, its immediate response, and the trace it leaves behind. |

Qingming and bearsnow are visual and simulation studies with continuing performance work. Their historical measurements have device, camera, workload, and sampling limits. Establish a fresh baseline in the current project and report its achieved results separately from the target.

## Picture, motion, and sound

Choose a representative gameplay frame and a short action sequence. Make the hero's silhouette, material response, contact with the ground, and relationship to the background read clearly before adding fine detail. Spend detail where the normal camera reveals it. Check the closest useful view as well as the ordinary play distance.

Give an action a readable anticipation, response, and aftermath. A basketball release, a vehicle landing, and a paw pressing snow need different timing. Drive visible and audible feedback from the same event. Test interrupted actions, repeated actions, and overlapping effects. Tune camera follow and accents while keeping the interaction target visible.

For a Three.js pipeline, inspect the installed renderer and official addons first. Keep lighting and intermediate color work in the intended linear/HDR space, then perform the final tone mapping and display conversion once. Verify color textures and data textures use their appropriate color spaces. Combine contact shading, highlight glow, atmosphere, and grading to reinforce the chosen style. Reserve strong focus effects for views whose interaction remains readable.

Compare effects enabled and disabled at the same camera and state to establish their actual contribution. Inspect resized viewports and representative bright, dark, and busy scenes. Listen to ordinary play to judge timing, balance, repetition, and pause behavior; report audio playback separately from listening evidence.

## Intuitive interfaces

Start with the question the player is answering now: where to act, what changed, or what to choose. Put that answer beside the relevant action or object. Use short action verbs, clear selected/available states, meaningful icons, and real item previews. Keep detailed rules in contextual help or an expandable section. Let the first successful action advance the introduction.

Inspect the title, play HUD, pause, results, and any task-relevant inventory or shop through the normal journey. Test keyboard navigation, focus return, supported touch targets, and reduced motion. Give buttons accessible names and pair essential color signals with shape, text, or position. Confirm that visual changes preserve the underlying action and its cost or reward.

## Quality-preserving performance

Record device, browser, renderer, resolution, pixel ratio, quality settings, workload, and duration. Warm the scene, then sample ordinary animated play with wall-clock timing. Report median and tail frame times, stalls, loading, and resource growth relevant to the problem. Scope software-rendered and assisted measurements to what they establish.

Locate the cost before choosing a fix. Reuse stable depth or scene data, batch suitable repeated objects, cache unchanged work, release obsolete resources, and use the installed platform's asynchronous readback where appropriate. Keep async results associated with their scene generation and request identity. Profile CPU and GPU work with suitable instruments and label each measurement accurately.

Compare before and after under matching conditions, retaining the chosen resolution, hero detail, effects, and simulation behavior. Capture representative stills and motion alongside timings. Verify the affected gameplay and resource lifetime after the optimization. When a requested frame budget still needs a visual trade-off, show the measured options and let the user select the treatment.
