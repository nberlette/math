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
import { POSITIVE_INFINITY } from "../constants/positive_infinity.ts";
import { NEGATIVE_INFINITY } from "../constants/negative_infinity.ts";
import { NAN } from "../constants/nan.ts";
import { pow } from "../pow.ts";

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
  if (bits === 0x7E00) return NAN;
  if (bits === 0x7C00) return POSITIVE_INFINITY;
  if (bits === 0xFC00) return NEGATIVE_INFINITY;
  if (bits === 0x8000) return -0;
  if (bits === 0) return 0;

  const sign = ((bits >> 15) & 0x1) ? -1 : 1;
  const expo = (bits >> 10) & 0x1F;
  const mant = bits & 0x3FF;

  if (expo === 0) return sign * pow(2, -14) * (mant / pow(2, 10));
  if (expo === 0x1F) return sign * (mant ? NAN : POSITIVE_INFINITY);

  return sign * pow(2, expo - 15) * (1 + mant / pow(2, 10));
}
