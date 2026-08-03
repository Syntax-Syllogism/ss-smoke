#!/usr/bin/env node

import { summarize } from './index.mjs';

const values = process.argv.slice(2).map(Number);
if (values.length === 0) {
  console.error('Usage: ss-smoke <number> [number...]');
  process.exitCode = 1;
} else {
  console.log(JSON.stringify(summarize(values), null, 2));
}
