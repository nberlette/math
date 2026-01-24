/**
 * This module provides a performant, zero-dependency implementation of the
 * `Math.clz32` function, which counts the number of leading zero bits in the
 * 32-bit binary representation of a number.
 *
 * @module clz32
 */

/**
 * Performant local implementation of the `Math.clz32` function, which counts
 * the number of leading zero bits in the 32-bit binary representation of a
 * number.
 *
 * @param x The number to count the leading zero bits of.
 * @returns The number of leading zero bits in the 32-bit binary representation
 * of the number.
 * @category Bitwise
 * @tags clz32
 */
export function clz32(x: number): number {
  x >>>= 0;
  if (x === 0) return 32;

  let count = 0;
  if ((x & 0xFFFF0000) === 0) {
    count += 16;
    x <<= 16;
  }
  if ((x & 0xFF000000) === 0) {
    count += 8;
    x <<= 8;
  }
  if ((x & 0xF0000000) === 0) {
    count += 4;
    x <<= 4;
  }
  if ((x & 0xC0000000) === 0) {
    count += 2;
    x <<= 2;
  }
  if ((x & 0x80000000) === 0) {
    count += 1;
  }
  return count;
}
