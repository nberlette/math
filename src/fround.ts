/**
 * Rounds a number to the nearest 32-bit floating point value (single
 * precision).
 *
 * @module fround
 */
import { decodeFloat32, encodeFloat32 } from "./float32/mod.ts";

/**
 * Rounds a number to the nearest 32-bit floating point value (single
 * precision).
 *
 * Based on `Math.fround` function, this function follows the same rounding and
 * conversion rules as per the IEEE 754-2008 specification for single-precision
 * floating-point numbers (also known as `binary32`).
 *
 * @param x The number to round.
 * @returns The 32-bit floating point rounded value of the number.
 * @category Rounding
 * @tags float, float32
 * @example
 * ```ts
 * import { fround } from "@nick/math/fround";
 * import { PI } from "@nick/math/constants";
 *
 * console.assert(fround(PI) === 3.1415927410125732); // OK
 * console.assert(Math.fround(PI) === 3.1415927410125732); // OK
 * ```
 */
export function fround(x: number): number {
  return decodeFloat32(encodeFloat32(+x));
}
