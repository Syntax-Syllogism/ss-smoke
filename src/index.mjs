/**
 * SS Smoke exists to exercise the Syntax & Syllogism release pipeline end to
 * end. It does one small real thing so that CI, the build step, and the
 * release snapshot all have something to act on.
 */

/** Sizes a value against a fixed set of buckets. */
export function bucket(value) {
  if (!Number.isFinite(value)) throw new TypeError(`Not a finite number: ${value}`);
  if (value < 0) return 'negative';
  if (value === 0) return 'zero';
  if (value < 10) return 'small';
  if (value < 100) return 'medium';
  return 'large';
}

/** Summarizes a list of numbers into a bucket histogram. */
export function summarize(values) {
  const counts = new Map();
  for (const value of values) {
    const name = bucket(value);
    counts.set(name, (counts.get(name) ?? 0) + 1);
  }
  return Object.fromEntries([...counts].sort(([a], [b]) => a.localeCompare(b)));
}
