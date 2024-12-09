/**
 * Calculates the cosine of a number, returning a value in the range `[-1, 1]`.
 *
 * @module cos
 */
import { abs } from "./abs.ts";
import { EPSILON } from "./constants/epsilon.ts";
import { NAN } from "./constants/nan.ts";
import { isFinite } from "./guards/finite.ts";

/**
 * Calculates the cosine of a number, returning a value in the range `[-1, 1]`.
 *
 * @param x The angle in radians whose cosine is to be calculated.
 * @returns The cosine of the provided angle.
 * @category Trigonometry
 * @tags cosine
 */
export function cos(x: number): number {
  if (!isFinite(x)) return NAN;

  let sum = 1, term = 1, n = 0;
  while (abs(term) > EPSILON) {
    n += 2;
    term *= -x * x / (n * (n - 1));
    sum += term;
  }
  return sum;
}
