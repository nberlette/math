/**
 * Calculates the inverse hyperbolic cosine of a number, returning a value in
 * the range `[0, +Infinity]`.
 *
 * @category Trigonometry
 * @module acosh
 */
import { NAN, POSITIVE_INFINITY } from "./constants/mod.ts";
import { log } from "./log.ts";
import { sqrt } from "./sqrt.ts";

/**
 * Calculates the inverse hyperbolic cosine of a number, returning a value in
 * the range `[0, +Infinity]`.
 *
 * @param x The number whose inverse hyperbolic cosine is to be calculated
 * (must be >= 1).
 * @returns The inverse hyperbolic cosine of the provided number.
 * @category Trigonometry
 */
export function acosh(x: number): number {
  if (x !== x || x < 1) return NAN;
  if (x === 1) return 0;
  if (x === POSITIVE_INFINITY) return x;
  if (x > 1.0e+7) return log(x) + Math.LN2;
  return log(x + sqrt(x * x - 1));
}
