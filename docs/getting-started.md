---
title: Getting started
description: Install SS Smoke and run your first summary.
---

## Install

```bash
npm install -g @syntax-syllogism/ss-smoke
```

## Run

Pass any number of values. Each is placed in a bucket and the counts are
reported as JSON.

```bash
ss-smoke 1 2 3 400
```

```json
{
  "large": 1,
  "small": 3
}
```

## Buckets

| Bucket | Range |
| --- | --- |
| `negative` | less than 0 |
| `zero` | exactly 0 |
| `small` | 0 to 9 |
| `medium` | 10 to 99 |
| `large` | 100 and above |

Non-finite values are rejected with a `TypeError` rather than silently
bucketed.

## Use it as a library

```js
import { bucket, summarize } from '@syntax-syllogism/ss-smoke';

bucket(42);            // 'medium'
summarize([0, 5, 250]); // { large: 1, small: 1, zero: 1 }
```

Back to the [overview](README.md).
