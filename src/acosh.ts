/**
 * Performant local implementation of the `Math.acosh` function. This function
 * calculates the inverse hyperbolic cosine of a number, returning a value in
 * the range `[0, +∞]`.
 *
 * @category Trigonometry
 * @module acosh
 */
import { NAN, POSITIVE_INFINITY } from "./constants.ts";
import { log } from "./log.ts";
import { sqrt } from "./sqrt.ts";

/**
 * Performant local implementation of the `Math.acosh` function. This function
 * calculates the inverse hyperbolic cosine of a number, returning a value in
 * the range `[0, +∞]`.
 *
 * @param x The number whose inverse hyperbolic cosine is to be calculated
 * (must be >= 1).
 * @returns The inverse hyperbolic cosine of the provided number.
 * @category Trigonometry
 */
export function acosh(x: number): number {
  if (isNaN(x) || x < 1) return NAN;
  if (x === POSITIVE_INFINITY) return x;
  return log(x + sqrt(x * x - 1));
}
