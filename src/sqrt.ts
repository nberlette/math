/**
 * Performant local implementation of the `Math.sqrt` function.
 *
 * It does not rely on any native `Math.*` functions, using pure arithmetic to
 * calculate the square root of the provided number.
 *
 * @category Arithmetic
 * @module sqrt
 */

import { abs } from "./abs.ts";
import { EPSILON, NAN } from "./constants.ts";

/**
 * Performant local implementation of the `Math.sqrt` function.
 *
 * It does not rely on any native `Math.*` functions, using pure arithmetic to
 * calculate the square root of the provided number.
 *
 * @param x The number to calculate the square root of
 * @returns The square root of the provided number.
 * @category Arithmetic
 * @module sqrt
 */
export function sqrt(x: number): number {
  if (x < 0) return NAN; // negative numbers have no real square root
  if (x === 0 || x === 1) return x; // sqrt(0) = 0, sqrt(1) = 1

  // use Newton's method to approximate the square root
  let z = x / 2, prev;
  do {
    prev = z;
    z = (z + x / z) / 2;
  } while (abs(z - prev) > EPSILON);
  return z;
}
