/**
 * Performant local implementation of the `Math.ceil` function.
 *
 * @module ceil
 */

import { NEGATIVE_INFINITY } from "./constants/negative_infinity.ts";
import { POSITIVE_INFINITY } from "./constants/positive_infinity.ts";

/**
 * Performant local implementation of the `Math.ceil` function.
 *
 * @param x The number to round up to the nearest whole number
 * @returns The smallest integer greater than or equal to the provided number.
 * @category Rounding
 * @tags rounding, ceiling
 */
export function ceil(x: number): number {
  x = +x;
  if (x !== x || x === POSITIVE_INFINITY || x === NEGATIVE_INFINITY) return x;
  if (x === 0) return x;
  const remainder = x % 1;
  if (remainder === 0) return x;
  if (x < 0 && x > -1) return -0;
  if (x > 0) return x - remainder + 1;
  return x - remainder;
}
