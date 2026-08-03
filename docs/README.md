---
title: SS Smoke
description: Toolchain smoke-test fixture for the Syntax & Syllogism release pipeline.
---

SS Smoke is a deliberately small tool whose real job is to prove that the
Syntax & Syllogism release pipeline works: scaffold, dual remotes, orphan
`release` branch, and this documentation site.

It sorts numbers into named buckets.

```bash
ss-smoke 0 5 5 250
```

```json
{
  "large": 1,
  "small": 2,
  "zero": 1
}
```

## Where to go next

- [Getting started](getting-started.md) — install it and run it.

## Why this project exists

Every page you are reading lives in the repository's root `docs/` directory as
plain Markdown. The `docs-site/` Astro project reads that directory directly, so
documentation is written once and never copied. If this page renders, the whole
docs toolchain is working.
