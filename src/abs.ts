/**
 * Performant local implementation of the `Math.abs` function.
 *
 * @example
 * ```ts
 * import { abs } from "@nick/math/abs";
 * import assert from "node:assert";
 *
 * assert.strictEqual(abs(-3.5), 3.5);
 * ```
 * @module abs
 */

/**
 * Performant local implementation of the `Math.abs` function.
 *
 * @param x The number to return the absolute value of (magnitude)
 * @returns The absolute value of the provided number.
 * @category Arithmetic
 */
export function abs(x: number): number {
  x = +x;
  if (x === 0) return 0;
  return x < 0 ? -x : x;
}
