import assert from 'node:assert/strict';
import { test } from 'node:test';

import { bucket, summarize } from '../src/index.mjs';

test('buckets values by magnitude', () => {
  assert.equal(bucket(-1), 'negative');
  assert.equal(bucket(0), 'zero');
  assert.equal(bucket(9), 'small');
  assert.equal(bucket(99), 'medium');
  assert.equal(bucket(100), 'large');
});

test('rejects values that are not finite numbers', () => {
  assert.throws(() => bucket(Number.NaN), TypeError);
  assert.throws(() => bucket(Number.POSITIVE_INFINITY), TypeError);
});

test('summarizes a list into a sorted histogram', () => {
  assert.deepEqual(summarize([0, 5, 5, 250]), { large: 1, small: 2, zero: 1 });
});
