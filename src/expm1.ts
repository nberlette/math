/**
 * Performant local implementation of the `Math.expm1` function. This function
 * calculates the exponential of `x` minus 1 (`exp(x) - 1`) with a high degree
 * of accuracy, even for very small values of `x`.
 *
 * @category Arithmetic
 * @module expm1
 */
import { abs } from "./abs.ts";
import { EPSILON, NEGATIVE_INFINITY, POSITIVE_INFINITY } from "./constants.ts";
import { exp } from "./exp.ts";

/**
 * Performant local implementation of the `Math.expm1` function. This function
 * calculates `exp(x) - 1` (the exponential of x minus 1), accurately even for
 * very small values of x.
 *
 * @param x The number whose exponential minus 1 is to be calculated.
 * @returns The value of `exp(x) - 1`.
 * @category Arithmetic
 */
export function expm1(x: number): number {
  if (x === 0) return x; // respect -0
  if (x === NEGATIVE_INFINITY) return -1;
  if (x === POSITIVE_INFINITY) return POSITIVE_INFINITY;
  if (abs(x) < EPSILON) return x;
  return exp(x) - 1;
}
