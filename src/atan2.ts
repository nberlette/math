/**
 * Performant local implementation of the `Math.atan2` function. This function
 * calculates the arctangent of the quotient of its arguments `y` and `x`,
 * returning a value in the range `[-π, π]`. It is useful for converting
 * Cartesian coordinates to polar coordinates.
 *
 * @param y The y-coordinate.
 * @param x The x-coordinate.
 * @returns The arctangent of the quotient `y / x`, in radians.
 * @category Trigonometry
 * @module atan2
 */

import { atan } from "./atan.ts";
import { NAN, PI } from "./constants.ts";

/**
 * Performant local implementation of the `Math.atan2` function. This function
 * calculates the arctangent of the quotient of its arguments `y` and `x`,
 * returning a value in the range `[-π, π]`. It is useful for converting
 * Cartesian coordinates to polar coordinates.
 *
 * @param y The y-coordinate.
 * @param x The x-coordinate.
 * @returns The arctangent of the quotient `y / x`, in radians.
 * @category Trigonometry
 */
export function atan2(y: number, x: number): number {
  if (isNaN(x) || isNaN(y)) return NAN;
  if (x === 0 && y === 0) return y; // Handle 0 and -0 preservation

  if (x === 0) return y > 0 ? PI / 2 : -PI / 2;
  if (y === 0) return x > 0 ? 0 : PI;

  if (x > 0) return atan(y / x);
  if (x < 0) return y >= 0 ? atan(y / x) + PI : atan(y / x) - PI;
  return 0; // Fallback
}
