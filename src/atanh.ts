/**
 * Performant local implementation of the `Math.atanh` function. This function
 * calculates the inverse hyperbolic tangent of a number, returning a value in
 * the range `[-∞, +∞]`.
 *
 * @module atanh
 */

import { NAN, POSITIVE_INFINITY } from "./constants.ts";
import { log } from "./log.ts";

/**
 * Performant local implementation of the `Math.atanh` function. This function
 * calculates the inverse hyperbolic tangent of a number, returning a value in
 * the range `[-∞, +∞]`.
 *
 * @param x The number whose inverse hyperbolic tangent is to be calculated
 * (must be between -1 and 1).
 * @returns The inverse hyperbolic tangent of the provided number.
 * @category Trigonometry
 */
export function atanh(x: number): number {
  if (isNaN(x) || x < -1 || x > 1) return NAN;
  if (x === -1 || x === 1) return x * POSITIVE_INFINITY;
  if (x === 0) return x;
  return 0.5 * log((1 + x) / (1 - x));
}
