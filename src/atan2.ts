/**
 * Calculates the arctangent of the quotient of its arguments, `y / x`,
 * returning a value in the range `(-π, π]`.
 *
 * @module atan2
 */
import { NAN } from "./constants/nan.ts";
import { PI } from "./constants/pi.ts";
import { atan } from "./atan.ts";
import { isNaN } from "./guards/nan.ts";
import { isFinite } from "./guards/finite.ts";
import { isNegativeZero } from "./guards/negative_zero.ts";
import { isNegativeInfinity } from "./guards/negative_infinity.ts";
import { isPositiveInfinity } from "./guards/positive_infinity.ts";

const PI_OVER_2 = PI / 2, PI_OVER_4 = PI / 4;

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
  if (y === 0 && x === 0) {
    const sign = isNegativeZero(y) ? -1 : 1;
    return (isNegativeZero(x) ? PI : 0) * sign;
  }
  if (x === 0) {
    if (y > 0) return PI_OVER_2;
    if (y < 0) return -PI_OVER_2;
    return NAN; // unreachable
  }

  // x (and possibly y) is infinity/-infinity
  if (isPositiveInfinity(x)) {
    if (isPositiveInfinity(y)) return PI_OVER_4;
    if (isNegativeInfinity(y)) return -PI_OVER_4;
    return y < 0 || isNegativeZero(y) ? -0 : 0;
  } else if (isNegativeInfinity(x)) {
    if (isPositiveInfinity(y)) return 3 * PI_OVER_4;
    if (isNegativeInfinity(y)) return -3 * PI_OVER_4;
    // deno-coverage-ignore-start
    return y < 0 || isNegativeZero(y) ? -PI : PI;
  } else if (isFinite(x) && !isFinite(y)) {
    return y > 0 ? PI_OVER_2 : -PI_OVER_2;
  } else if (!isFinite(x) && isFinite(y)) {
    // preserve the sign of y for -0
    if (x > 0) return isNegativeZero(y) || y < 0 ? -0 : 0;
    return y < 0 || isNegativeZero(y) ? -PI : PI;
  }
  // deno-coverage-ignore-stop

  if (x > 0) return atan(y / x);
  if (x < 0) return atan(y / x) + (y < 0 || isNegativeZero(y) ? -PI : PI);

  // deno-coverage-ignore
  return NAN; // this should never happen
}
