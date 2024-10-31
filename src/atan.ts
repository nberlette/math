/**
 * Performant local implementation of the `Math.atan` function. This function
 * calculates the arctangent (inverse tangent) of a number, returning a value
 * in the range `[-π/2, π/2]`.
 *
 * @category Trigonometry
 * @module atan
 */

import { abs } from "./abs.ts";
import { EPSILON } from "./constants/epsilon.ts";
import { NAN } from "./constants/nan.ts";
import { PI } from "./constants/pi.ts";
import { POSITIVE_INFINITY } from "./constants/positive_infinity.ts";
import { NEGATIVE_INFINITY } from "./guards/negative_infinity.ts";

/**
 * Performant local implementation of the `Math.atan` function. This function
 * calculates the arctangent (inverse tangent) of a number, returning a value
 * in the range `[-π/2, π/2]`.
 *
 * @param x The number whose arctangent is to be calculated.
 * @returns The arctangent of the provided number, in radians.
 * @category Trigonometry
 */
export function atan(x: number): number {
  if (isNaN(x)) return NAN;
  if (x === POSITIVE_INFINITY) return PI / 2;
  if (x === NEGATIVE_INFINITY) return -PI / 2;
  if (x === 0) return x; // Preserve -0

  let sum = 0, term = x, n = 1;
  const xSquared = x * x;
  const isNegative = x < 0;
  const absX = abs(x);

  if (absX <= 1) {
    while (abs(term) > EPSILON) {
      sum += term;
      term *= -xSquared * (2 * n - 1) / (2 * n + 1);
      n++;
    }
    return isNegative ? -sum : sum;
  }
  return x > 0 ? PI / 2 - atan(1 / x) : -PI / 2 - atan(1 / x);
}
