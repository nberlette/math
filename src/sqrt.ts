/**
 * Calculates the square root of a number.
 *
 * @module sqrt
 */
import { EPSILON } from "./constants/epsilon.ts";
import { NAN } from "./constants/nan.ts";
import { abs } from "./abs.ts";

/**
 * Calculates the square root of a number.
 *
 * @param x The number to calculate the square root of
 * @returns The square root of the provided number.
 * @example
 * ```ts
 * import * as math from "@nick/math";
 *
 * math.sqrt(4); // 2
 * math.sqrt(16); // 4
 * math.sqrt(0); // 0
 * math.sqrt(1); // 1
 * math.sqrt(-1); // NaN
 * math.sqrt(-4); // NaN
 * ```
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
