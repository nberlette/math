/**
 * Performant local implementation of the `Math.round` function.
 *
 * @category Arithmetic
 * @module round
 */

/**
 * Performant local implementation of the `Math.round` function.
 *
 * @param x The number to round to the nearest whole number
 * @returns The nearest whole number to the provided number.
 * @category Arithmetic
 */
export function round(x: number): number {
  return (x = +x) < 0 ? -round(-x) : (
    x % 1 >= 0.5 ? x + 1 - x % 1 : x - x % 1
  );
}
