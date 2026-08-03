---
title: Configuration
description: Bucket thresholds and how to override them.
---

SS Smoke works with no configuration. When the defaults do not suit your data,
pass your own thresholds.

## Default thresholds

```js
import { summarize } from '@syntax-syllogism/ss-smoke';

summarize([1, 50, 5000]);
// { large: 1, medium: 1, small: 1 }
```

## Custom thresholds

`summarize` accepts an optional `thresholds` array of `[name, limit]` pairs,
evaluated in order. The first matching limit wins; values above every limit fall
into the final bucket.

```js
summarize([1, 50, 5000], {
  thresholds: [
    ['tiny', 10],
    ['normal', 1000],
    ['huge', Infinity],
  ],
});
// { huge: 1, normal: 1, tiny: 1 }
```

## Notes

- Thresholds must be sorted ascending; an unsorted list throws a `RangeError`.
- Negative values are bucketed by the same rules, so include a negative limit if
  you care about them separately.

See [getting started](getting-started.md) for the default bucket table.

## Source

The threshold defaults are defined in
[`src/index.mjs`](https://github.com/Syntax-Syllogism/ss-smoke/blob/v0.2.0/src/index.mjs),
pinned to the released tag so the link keeps working as the code changes.
