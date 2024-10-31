/**
 * Performant local implementation of the `Math.cos` function. This function
 * calculates the cosine of a number, returning a value in the range `[-1, 1]`.
 *
 * @param x The angle in radians whose cosine is to be calculated.
 * @returns The cosine of the provided angle.
 * @category Trigonometry
 * @module cos
 */
import { abs } from "./abs.ts";
import { EPSILON, NAN, NEGATIVE_INFINITY, POSITIVE_INFINITY } from "./constants.ts";

/**
 * Performant local implementation of the `Math.cos` function. This function
 * calculates the cosine of a number, returning a value in the range `[-1, 1]`.
 *
 * @param x The angle in radians whose cosine is to be calculated.
 * @returns The cosine of the provided angle.
 * @category Trigonometry
 */
export function cos(x: number): number {
  if (isNaN(x)) return NAN;
  if (x === POSITIVE_INFINITY || x === NEGATIVE_INFINITY) return NAN;

  let sum = 1, term = 1, n = 0;
  while (abs(term) > EPSILON) {
    n += 2;
    term *= -x * x / (n * (n - 1));
    sum += term;
  }
  return sum;
}
