/**
 * This module provides a performant, zero-dependency implementation of the
 * `Math.clz32` function, which counts the number of leading zero bits in the
 * 32-bit binary representation of a number.
 *
 * @module clz32
 */
import { LOG2E } from "./constants/log2e.ts";
import { log } from "./log.ts";

/**
 * Performant local implementation of the `Math.clz32` function, which counts
 * the number of leading zero bits in the 32-bit binary representation of a
 * number.
 *
 * @param x The number to count the leading zero bits of.
 * @returns The number of leading zero bits in the 32-bit binary representation
 * of the number.
 * @category Arithmetic
 * @tags clz32
 */
export function clz32(x: number): number {
  x = (x | 0) >>> 0;
  return x ? 31 - (log(x) * LOG2E | 0) : 32;
}
