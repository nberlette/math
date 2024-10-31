/**
 * Performant local implementation of the `Math.abs` function.
 *
 * @module abs
 */

/**
 * Performant local implementation of the `Math.abs` function.
 *
 * @param x The number to return the absolute value of (magnitude)
 * @returns The absolute value of the provided number.
 * @category Arithmetic
 */
export function abs(x: number): number {
  return (x = +x) < 0 ? -x : x;
}
