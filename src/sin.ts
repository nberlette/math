/**
 * Calculates the sine of a number, returning a value in the range `[-1, 1]`.
 *
 * @module sin
 */

import { abs } from "./abs.ts";
import { EPSILON } from "./constants/epsilon.ts";
import { NAN } from "./constants/nan.ts";
import { isFinite } from "./guards/finite.ts";

/**
 * Calculates the sine of a number, returning a value in the range `[-1, 1]`.
 *
 * @param x The angle in radians whose sine is to be calculated.
 * @returns The sine of the provided angle.
 * @category Trigonometry
 */
export function sin(x: number): number {
  if (!isFinite(x)) return NAN;

  let sum = (x = +x), term = x, n = 1;
  while (abs(term) > EPSILON) {
    n += 2;
    term *= -x * x / (n * (n - 1));
    sum += term;
  }
  return sum;
}
