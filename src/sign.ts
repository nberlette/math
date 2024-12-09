/**
 * Returns the sign of a number, indicating whether the number is positive,
 * negative, or zero.
 *
 * @module sign
 */

/**
 * Returns the sign of a number, indicating whether the number is positive,
 * negative, or zero. This preserves the sign of `-0`, and returns `NaN` as-is.
 *
 * @param x The number to return the sign of
 * @returns `1` if `x` is positive, `-1` if it is negative, and `0` if it is
 * zero. This preserves the sign of `-0`, and returns `NaN` as-is.
 * @category Arithmetic
 */
export function sign(x: number): number {
  return x < 0 ? -1 : x > 0 ? 1 : x;
}
