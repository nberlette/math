/**
 * Performant local implementation of the `Math.log1p` function. This function
 * calculates the natural logarithm of 1 + x (`log(1 + x)`), accurately even
 * for very small values of x.
 *
 * @category Arithmetic
 * @module log1p
 */
import { abs } from "./abs.ts";
import { EPSILON, NAN, NEGATIVE_INFINITY } from "./constants.ts";
import { log } from "./log.ts";

/**
 * Performant local implementation of the `Math.log1p` function. This function
 * calculates the natural logarithm of 1 + x (`log(1 + x)`), accurately even
 * for very small values of x.
 *
 * @param x The number whose logarithm of (1 + x) is to be calculated.
 * @returns The natural logarithm of 1 + x.
 * @category Arithmetic
 */
export function log1p(x: number): number {
  if (x === -1) return NEGATIVE_INFINITY;
  if (x < -1) return NAN;
  if (abs(x) < EPSILON) return x;
  return log(1 + x);
}
