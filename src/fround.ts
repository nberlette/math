/**
 * Performant local implementation of the `Math.fround` function, which rounds
 * a number to the nearest 32-bit floating point value (single precision).
 *
 * @module fround
 */
import { decodeF32, encodeF32 } from "./internal/encode_f32.ts";

/**
 * Performant local implementation of the `Math.fround` function, which rounds
 * a number to the nearest 32-bit floating point value (single precision).
 *
 * @param x The number to round.
 * @returns The 32-bit floating point rounded value of the number.
 * @category Arithmetic
 * @tags rounding, fractions, float
 */
export function fround(x: number): number {
  return decodeF32(encodeF32(x = +x));
}
