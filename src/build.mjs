/**
 * A build step that does just enough to be worth gating a release on: it
 * imports the package surface and fails loudly if anything is unreachable.
 */

import { bucket, summarize } from './index.mjs';

for (const name of ['bucket', 'summarize']) {
  if (typeof { bucket, summarize }[name] !== 'function') {
    throw new Error(`Public export missing: ${name}`);
  }
}

console.log('build: public surface OK');
