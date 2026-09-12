# Performance

Record device, browser, renderer, resolution, pixel ratio, quality settings, workload, and duration. Warm the scene 1.5 s, then sample 10 s of ordinary animated play with wall-clock timing; [perf-sample](../scripts/perf-sample.mjs) does this for a running URL and writes a labeled JSON report. Report median and tail frame times, stalls, loading, and resource growth. Label CPU/GPU, software-rendered, and assisted measurements by what they establish.

## Targets

| Context | Target |
| --- | --- |
| Desktop, 60 Hz | p95 frame interval ≤ 20 ms, zero intervals > 50 ms in a 10 s sample |
| Mobile, 30 Hz floor | p95 ≤ 40 ms |
| Load to first interactive frame | ≤ 3 s on a warm cache |
| Heap after 5 minutes of replay loops | flat within noise; growth needs an explanation |

Locate the cost before choosing a fix. Reuse stable depth or scene data, batch repeated objects, cache unchanged work, release obsolete resources, and use asynchronous readback where supported. Associate async results with their scene generation and request identity. Measure the affected path after each coherent optimization batch.

Compare before and after with matching cameras, animation states, resolution, hero detail, effects, and simulation behavior; a byte-identical matching still is the proof that the visual treatment survived. Capture stills and motion alongside timings. Verify affected gameplay and resource lifetimes. If the budget needs a visual trade-off, show measured options for the user's choice.

Historical measurements from other projects or sessions carry their own device, camera, workload, and duration limits. Establish a fresh baseline and keep historical results, current measurements, and targets in separate columns.

## Done when

The requested measured criteria pass while the chosen visual treatment remains intact, or the specific remaining gap is reported with numbers.
