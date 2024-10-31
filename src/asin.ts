/**
 * Performant local implementation of the `Math.asin` function. This function
 * calculates the arcsine (inverse sine) of a number, returning a value in the
 * range `[-π/2, π/2]`.
 *
 * @category Trigonometry
 * @module asin
 */
import { NAN } from "./constants.ts";
import { atan2 } from "./atan2.ts";
import { sqrt } from "./sqrt.ts";


/**
 * Performant local implementation of the `Math.asin` function. This function
 * calculates the arcsine (inverse sine) of a number, returning a value in the
 * range `[-π/2, π/2]`.
 *
 * @param x The number whose arcsine is to be calculated (must be between -1
 * and 1).
 * @returns The arcsine of the provided number, in radians.
 * @category Trigonometry
 */
export function asin(x: number): number {
  if (isNaN(x) || x < -1 || x > 1) return NAN;
  return atan2(x, sqrt(1 - x * x));
}
