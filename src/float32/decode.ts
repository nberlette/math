/**
 * This module provides functions for decoding 32-bit single-precision floating
 * point numbers (`Float32`) from IEEE 754-2008 encoded `Uint32` values, like
 * those returned by {@linkcode encodeFloat32} or DataView's `geUint32` method.
 *
 * The `Float32` format is a 32-bit representation of a floating point number
 * that follows the IEEE 754-2008 standard for single-precision binary32
 * floating point numbers. This format is used to store floating point values
 * in a DataView via `setUint32`, and is equivalent to the result of calling
 * `DataView.prototype.getUint32` when reading a single-precision float.
 *
 * To encode a standard JavaScript number into a `Float32` value, use the
 * {@linkcode encodeFloat32} function of the `./encode` module, passing it the
 * number you want to encode. The result can then be stored in a DataView via
 * `setUint32`, or used as an intermediate value for further processing.
 *
 *  To decode the `Float32` value back into a standard JavaScript number (but
 * with 32-bits of precision), use the {@linkcode decodeFloat32} function of
 * this module, passing it the encoded value.
 *
 * @module float32/decode
 */
import float32 from "./constants.ts";
import { decode } from "../internal/ieee754.ts";

/**
 * Decodes a 32-bit unsigned integer (`Uint32`) into a 32-bit single-precision
 * floating point value (`Float32`) with 23 bits of mantissa. This function
 * follows the IEEE 754-2008 spec for single-precision floating point numbers.
 *
 * The input value is expected to be the result of an encoding operation, such
 * as the value returned by the {@linkcode encodeFloat32} function, or by
 * DataView's `getUint32` method when reading a single-precision float.
 *
 * This function is used internally by the {@linkcode fround} function to
 * convert the intermediate value back into a standard JavaScript number.
 *
 * ## Special Cases
 *
 * The following special cases are handled separately, short-circuiting the
 * decoding process to return a well-known constant value (as per IEEE spec):
 *
 * - `0x7FC00000` (2139095040) decodes to `NaN`
 * - `0x7F800000` (2139095040) decodes to `+Infinity`
 * - `0xFF800000` (4286578688) decodes to `-Infinity`
 * - `0x80000000` (2147483648) decodes to `-0`
 *
 * @param bits The encoded 32-bit single-precision floating point value.
 * @returns The decoded standard JavaScript number.
 * @example
 * ```ts
 * import { decodeFloat32 } from "@nick/math/float32";
 *
 * console.log(decodeFloat32(0x40490FDB)); // 3.
 *
 * const view = new DataView(new Float32Array([3.14]).buffer);
 * console.log(decodeFloat32(view.getUint32(0)));
 * ```
 * @category IEEE-754
 * @tags float, float32, decode
 */
export function decodeFloat32(bits: number): number {
  return decode(bits, float32);
}
