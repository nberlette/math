/**
 * Performant local implementation of the `Math.min` function. This function is
 * used rather than the global `Math.min` function to avoid potential issues
 * that may arise from global variable shadowing, reassignment, or malicious
 * tampering.
 *
 * @category Arithmetic
 * @module min
 */

/**
 * Performant local implementation of the `Math.min` function. This function is
 * used rather than the global `Math.min` function to avoid potential issues
 * that may arise from global variable shadowing, reassignment, or malicious
 * tampering.
 *
 * @param a The first number to compare (left side of the operator)
 * @param b The number to compare against (right side of the operator)
 * @returns The smaller of the two operands.
 * @category Arithmetic
 */
export function min(a: number, b: number): number {
  return a < b ? a : b;
}
