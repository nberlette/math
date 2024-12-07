/**
 * Calculates the arccosine (inverse cosine) of a number, returning a value in
 * the range `[0, π]`.
 *
 * @module acos
 */

import { isNaN, NaN } from "./guards/nan.ts";
import { atan2 } from "./atan2.ts";
import { sqrt } from "./sqrt.ts";

/**
 * Calculates the arccosine (inverse cosine) of a number, returning a value in
 * the range `[0, π]`.
 *
 * @param x The number whose arccosine is to be calculated (must be between -1
 * and 1).
 * @returns The arccosine of the provided number, in radians.
 * @category Trigonometry
 */
export function acos(x: number): number {
  if (isNaN(x) || x < -1 || x > 1) return NaN;
  return atan2(sqrt(1 - x * x), x);
}
