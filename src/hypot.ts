/**
 * Performant local implementation of the `Math.hypot` function. This function
 * calculates the square root of the sum of squares of its arguments (`sqrt(a^2
 * + b^2 + ...)`), avoiding overflow or underflow errors.
 *
 * @module hypot
 */

import { abs } from "./abs.ts";
import { sqrt } from "./sqrt.ts";

/**
 * Performant local implementation of the `Math.hypot` function. This function
 * calculates the square root of the sum of squares of its arguments (`sqrt(a^2
 * + b^2 + ...)`), avoiding overflow or underflow errors.
 *
 * @param values The numbers whose Euclidean distance from the origin is to be
 * calculated.
 * @returns The square root of the sum of squares of the provided values.
 * @category Arithmetic
 */
export function hypot(...values: number[]): number {
  let max = 0;
  for (const value of values) max = max > abs(value) ? max : abs(value);
  if (max === 0) return 0;

  let sum = 0;
  for (const value of values) {
    const normalized = value / max;
    sum += normalized * normalized;
  }
  return max * sqrt(sum);
}
