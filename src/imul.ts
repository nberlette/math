/**
 * Performant local implementation of the `Math.imul` function. This function
 * performs a 32-bit integer multiplication of two numbers (interpreted as
 * 32-bit integers), returning a 32-bit result.
 *
 * @module imul
 */

/**
 * Performant local implementation of the `Math.imul` function. This function
 * performs a 32-bit integer multiplication of two numbers (interpreted as
 * 32-bit integers), returning a 32-bit result.
 *
 * @param a The first number (treated as a 32-bit integer).
 * @param b The second number (treated as a 32-bit integer).
 * @returns The result of multiplying the two numbers as 32-bit integers.
 * @category Arithmetic
 */
export function imul(a: number, b: number): number {
  const ah = (a >>> 16) & 0xffff, al = a & 0xffff;
  const bh = (b >>> 16) & 0xffff, bl = b & 0xffff;
  return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)) | 0;
}
