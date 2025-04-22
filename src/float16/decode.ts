/**
 * This module provides functions for decoding 16-bit half-precision floating
 * point numbers (`Float16`) from IEEE 754-2008 encoded `Uint16` values, like
 * those returned by {@linkcode encodeFloat16} or DataView's `geUint16` method.
 *
 * The `Float16` format is a 16-bit representation of a floating point number
 * that follows the IEEE 754-2008 standard for half-precision binary16 floating
 * point numbers. This format is used to store floating point values in a
 * DataView or TypedArray, and is used in graphics programming and other
 * performance-sensitive applications.
 *
 * The `decodeFloat16` function decodes a 16-bit half-precision floating point
 * value into a standard JavaScript number, which can be used in arithmetic
 * operations or passed to other functions.
 *
 * @module float16/decode
 */
import {
  FLOAT16_EXPONENT_BIAS,
  FLOAT16_EXPONENT_BITS,
  FLOAT16_MANTISSA_BITS,
  FLOAT16_NAN,
  FLOAT16_NEGATIVE_INFINITY,
  FLOAT16_NEGATIVE_ZERO,
  FLOAT16_POSITIVE_INFINITY,
  FLOAT16_POSITIVE_ZERO,
} from "./constants.ts";
import { decode } from "../internal/ieee754.ts";

/**
 * Decodes a 16-bit unsigned integer (`Uint16`) into a 16-bit half-precision
 * floating point value (`Float16`) with 10 bits of mantissa. This function
 * follows the IEEE 754-2008 spec for half-precision floating point numbers.
 *
 * The input value is expected to be the result of an encoding operation, such
 * as the value returned by the {@linkcode encodeFloat16} function, or by
 * DataView's `getUint16` method when reading a half-precision float.
 *
 * This function is used internally by the {@linkcode f16round} function to
 * convert the intermediate value back into a standard JavaScript number. The
 * returned value is a standard JavaScript number, which can be used in
 * arithmetic operations or passed to other functions.
 *
 * ## Special Cases
 *
 * The following special cases are handled separately, short-circuiting the
 * decoding process to return a well-known constant value (as per IEEE spec):
 *
 * - `0x7E00` (32256) decodes to `NaN`
 * - `0x7C00` (31744) decodes to `+Infinity`
 * - `0xFC00` (64512) decodes to `-Infinity`
 * - `0x8000` (32768) decodes to `-0`
 *
 * @param bits The encoded 16-bit half-precision floating point value.
 * @returns The decoded standard JavaScript number.
 * @example
 * ```ts
 * import { decodeFloat16 } from "@nick/math/float16";
 *
 * console.log(decodeFloat16(0x4248)); // 3.140625
 *
 * const view = new DataView(new Float16Array([3.14]).buffer);
 * console.log(decodeFloat16(view.getUint16(0))); // 3.140625
 * ```
 * @category IEEE-754
 * @tags float, float16, decode
 */
export function decodeFloat16(bits: number): number {
  return decode(bits, {
    exponent: FLOAT16_EXPONENT_BITS,
    mantissa: FLOAT16_MANTISSA_BITS,
    bias: FLOAT16_EXPONENT_BIAS,
    nan: FLOAT16_NAN,
    positive_infinity: FLOAT16_POSITIVE_INFINITY,
    negative_infinity: FLOAT16_NEGATIVE_INFINITY,
    positive_zero: FLOAT16_POSITIVE_ZERO,
    negative_zero: FLOAT16_NEGATIVE_ZERO,
  });
}
