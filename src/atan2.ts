/**
 * Calculates the arctangent of the quotient of its arguments, `y / x`,
 * returning a value in the range `(-π, π]`.
 *
 * @category Trigonometry
 * @module atan2
 */
import { NAN } from "./constants/nan.ts";
import { PI } from "./constants/pi.ts";
import { isFinite } from "./guards/finite.ts";
import { atan } from "./atan.ts";
import { isNegativeZero } from "./guards/negative_zero.ts";
import { isNegativeInfinity } from "./guards/negative_infinity.ts";
import { isPositiveInfinity } from "./guards/positive_infinity.ts";

/**
 * Calculates the arctangent of the quotient of its arguments, `y / x`,
 * returning a value in the range `(-π, π]`.
 *
 * @param y The ordinate coordinate.
 * @param x The abscissa coordinate.
 * @returns The angle between the positive x-axis and point (x, y), in radians.
 * @category Trigonometry
 * @tags angle, arctangent
 */
export function atan2(y: number, x: number): number {
  // fast paths for special cases
  if (isNaN(y) || isNaN(x)) return NAN;
  if (y === 0 && x === 0) return y; // preserve sign of y for -0
  const PI_OVER_2 = PI / 2, PI_OVER_4 = PI / 4;
  // x is zero
  if (x === 0) {
    if (y > 0) return PI_OVER_2;
    if (y < 0) return -PI_OVER_2;
    // y is zero, x is zero
    return NAN; // undefined, per IEEE standards
  }

  // x (and possibly y) is infinity/-infinity
  if (isPositiveInfinity(x)) {
    if (isPositiveInfinity(y)) return PI_OVER_4;
    if (isNegativeInfinity(y)) return -PI_OVER_4;
    return PI_OVER_2;
  } else if (isNegativeInfinity(x)) {
    if (isPositiveInfinity(y)) return (3 * PI) / 4;
    if (isNegativeInfinity(y)) return (-3 * PI) / 4;
    return -PI_OVER_2;
  } else if (isFinite(x) && !isFinite(y)) {
    return y > 0 ? PI_OVER_2 : -PI_OVER_2;
  } else if (!isFinite(x) && isFinite(y)) {
    // preserve the sign of y for -0
    if (x > 0) return isNegativeZero(y) || y < 0 ? -0 : 0;
    return y >= 0 && !isNegativeZero(y) ? PI : -PI;
  }

  if (x > 0) return atan(y / x);
  if (x < 0) return atan(y / x) + (y >= 0 && !isNegativeZero(y) ? PI : -PI);

  return NAN; // this should never happen
}
