/**
 * SS Smoke exists to exercise the Syntax & Syllogism release pipeline end to
 * end. It does one small real thing so that CI, the build step, and the
 * release snapshot all have something to act on.
 */

const DEFAULT_THRESHOLDS = [
  ['negative', 0],
  ['zero', 1],
  ['small', 10],
  ['medium', 100],
  ['large', Infinity],
];

/** Sizes a value against a set of ascending `[name, limit]` thresholds. */
export function bucket(value, thresholds = DEFAULT_THRESHOLDS) {
  if (!Number.isFinite(value)) throw new TypeError(`Not a finite number: ${value}`);
  for (const [name, limit] of thresholds) {
    if (value < limit) return name;
  }
  return thresholds.at(-1)[0];
}

/** Summarizes a list of numbers into a bucket histogram. */
export function summarize(values, { thresholds = DEFAULT_THRESHOLDS } = {}) {
  const limits = thresholds.map(([, limit]) => limit);
  if (limits.some((limit, index) => index > 0 && limit <= limits[index - 1])) {
    throw new RangeError('Thresholds must be sorted ascending.');
  }
  const counts = new Map();
  for (const value of values) {
    const name = bucket(value, thresholds);
    counts.set(name, (counts.get(name) ?? 0) + 1);
  }
  return Object.fromEntries([...counts].sort(([a], [b]) => a.localeCompare(b)));
}
