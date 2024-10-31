/**
 * Performant local implementation of the `Math.max` function.
 *
 * @category Arithmetic
 * @module max
 */

/**
 * Performant local implementation of the `Math.max` function.
 *
 * @param a The first number to compare (left side of the operator)
 * @param b The number to compare against (right side of the operator)
 * @returns The larger of the two operands.
 * @category Arithmetic
 */
export function max(a: number, b: number): number {
  return a > b ? a : b;
}
