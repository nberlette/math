/**
 * Calculates the exponential of `x` minus 1 (`exp(x) - 1`) with a high degree
 * of accuracy, even for very small values of `x`.
 *
 * @module expm1
 */
import { EPSILON } from "./constants/epsilon.ts";
import { abs } from "./abs.ts";
import { exp } from "./exp.ts";
import { NEGATIVE_INFINITY } from "./constants/negative_infinity.ts";
import { POSITIVE_INFINITY } from "./constants/positive_infinity.ts";

/**
 * Calculates `exp(x) - 1` (the exponential of x minus 1).
 *
 * Accurate even for very small values of x.
 *
 * @param x The number whose exponential minus 1 is to be calculated.
 * @returns The value of `exp(x) - 1`.
 * @category Exponential
 */
export function expm1(x: number): number {
  // fast paths for common cases
  if ((x = +x) === 0) return x; // respect -0
  if (x === POSITIVE_INFINITY) return x;
  if (x === NEGATIVE_INFINITY) return -1;
  // for very small values of x, exp(x) - 1 is approximately equal to x
  if (abs(x) < EPSILON) return x;
  // for all other values of x, exp(x) - 1 is accurate
  return exp(x) - 1;
}
