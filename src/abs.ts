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
  x = +x;
  if (x === 0) return 0;
  return x < 0 ? -x : x;
}
