/**
 * This module provides functions for rounding numbers to 16-bit floating point
 * values that follow the IEEE 754-2008 standard for half-precision binary16
 * floating point numbers.
 *
 * The `roundFloat16` function rounds a number to the nearest 16-bit floating
 * point value (half precision), following the same rounding and conversion
 * rules as the native `Math.f16round` function from the TC39 Proposal for
 * [Float16Array], which began shipping in ES2024.
 *
 * [Float16Array]: https://github.com/tc39/proposal-float16array
 *
 * @module float16/round
 */
import { encodeFloat16 as encode } from "./encode.ts";
import { decodeFloat16 as decode } from "./decode.ts";

/**
 * Rounds a number to the nearest 16-bit floating point value (half precision).
 *
 * Based on `Math.f16round` function from the TC39 Proposal for [Float16Array],
 * which began shipping in ES2024, this function follows the same rounding and
 * conversion rules as per the IEEE 754-2008 specification for half-precision
 * floating-point numbers (also known as binary16).
 *
 * [Float16Array]: https://github.com/tc39/proposal-float16array
 *
 * @param x The number to round.
 * @returns The 16-bit floating point rounded value of the number.
 * @category Rounding
 * @tags float, float16
 * @example
 * ```ts
 * import { roundFloat16 } from "@nick/math/float16";
 * import { PI } from "@nick/math/constants";
 *
 * console.assert(roundFloat16(PI) === 3.140625); // OK
 * ```
 */
export function roundFloat16(x: number): number {
  return decode(encode(+x));
}
