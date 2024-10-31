/**
 * Performant local implementation of the `Math.sign` function. This function is
 * used rather than the global `Math.sign` function to avoid potential issues that
 * may arise from global variable shadowing, reassignment, or malicious tampering
 * @param x The number to return the sign of
 * @returns `1` if `x` is positive, `-1` if it is negative, and `0` if it is zero.
 * This preserves the sign of `-0`, and returns `NaN` as-is.
 * @category Arithmetic
 * @module sign
 */

/**
 * Performant local implementation of the `Math.sign` function. This function is
 * used rather than the global `Math.sign` function to avoid potential issues that
 * may arise from global variable shadowing, reassignment, or malicious tampering
 * @param x The number to return the sign of
 * @returns `1` if `x` is positive, `-1` if it is negative, and `0` if it is zero.
 * This preserves the sign of `-0`, and returns `NaN` as-is.
 * @category Arithmetic
 */
export function sign(x: number): number {
  return x < 0 ? -1 : x > 0 ? 1 : x;
}
