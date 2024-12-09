/**
 * Calculates the hyperbolic tangent of a number, returning a value in the
 * range `[-1, 1]`.
 *
 * @category Trigonometry
 * @module tanh
 */

import { exp } from "./exp.ts";
import { isNaN, NAN } from "./guards/nan.ts";
import { isPositiveInfinity } from "./guards/positive_infinity.ts";
import { isNegativeInfinity } from "./guards/negative_infinity.ts";

/**
 * Calculates the hyperbolic tangent of a number, returning a value in the
 * range `[-1, 1]`.
 *
 * @param x The number whose hyperbolic tangent is to be calculated.
 * @returns The hyperbolic tangent of the provided number.
 * @category Trigonometry
 */
export function tanh(x: number): number {
  if (x === 0) return x;
  if (isNaN(x)) return NAN;
  if (isPositiveInfinity(x)) return 1;
  if (isNegativeInfinity(x)) return -1;
  return (exp(x) - exp(-x)) / (exp(x) + exp(-x));
}
