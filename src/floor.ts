/**
 * Performant local implementation of the `Math.floor` function.
 *
 * @category Arithmetic
 * @module floor
 */
import { NEGATIVE_INFINITY } from "./constants/negative_infinity.ts";
import { POSITIVE_INFINITY } from "./constants/positive_infinity.ts";

/**
 * Performant local implementation of the `Math.floor` function.
 *
 * @param x The number to round down to the nearest whole number
 * @returns The largest integer less than or equal to the provided number.
 * @category Arithmetic
 * @tags rounding, floor
 */
export function floor(x: number): number {
  x = +x;
  if (x !== x || x === POSITIVE_INFINITY || x === NEGATIVE_INFINITY) return x;
  if (x === 0) return x;
  const remainder = x % 1;
  if (remainder === 0) return x;
  const truncated = x - remainder;
  return x < 0 ? truncated - 1 : truncated;
}
