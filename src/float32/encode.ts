/**
 * This module provides functions for encoding standard JavaScript numbers
 * (64-bit double-precision floating point values) into 32-bit unsigned
 * integers (Uint32) that represent single-precision floating point numbers.
 *
 * The `Float32` format is a 32-bit representation of a floating point number
 * that follows the IEEE 754-2008 standard for single-precision binary32
 * floating point numbers. This format is used to store floating point values
 * in a DataView via `setUint32`, and is equivalent to the result of calling
 * `DataView.prototype.getUint32` when reading a single-precision float.
 *
 * To decode a `Float32` value back into a standard JavaScript number, use the
 * {@linkcode decodeFloat32} function of the `./decode` module, passing it the
 * encoded value returned by {@linkcode encodeFloat32}.
 *
 * @module float32/encode
 */
import {
  FLOAT32_EXPONENT_BIAS,
  FLOAT32_EXPONENT_BITS,
  FLOAT32_MANTISSA_BITS,
  FLOAT32_NAN,
  FLOAT32_NEGATIVE_INFINITY,
  FLOAT32_NEGATIVE_ZERO,
  FLOAT32_POSITIVE_INFINITY,
  FLOAT32_POSITIVE_ZERO,
} from "./constants.ts";
import { encode } from "../internal/ieee754.ts";

/**
 * Encodes a standard JavaScript number (a 64-bit double-precision floating
 * point value, 52 bits of mantissa) into a 32-bit unsigned integer (Uint32).
 * This function follows the IEEE 754-2008 standard for single-precision 32-bit
 * floating point numbers, also known as `Float32` (or `binary32`).
 *
 * This function is used internally by the {@linkcode fround} function to
 * convert the input number into a portable intermediate form, which it then
 * transforms into the `Float32` format via the {@linkcode decodeFloat32}.
 *
 * The returned value can be used to store single-precision floating point
 * values in a DataView via `setUint32`, since it is equivalent to the result
 * of `DataView.prototype.getUint32` when reading a single-precision float.
 *
 * ## Encoding Scheme
 *
 * The encoding scheme varies based on the input value classification:
 *
 * - Normal (within the normal range of representable values)
 * - Subnormal (too small to be represented with full precision)
 * - Special cases (see below)
 *
 * ## Special Cases
 *
 * The following special cases are handled separately, short-circuiting the
 * encoding process to return a well-known constant value:
 *
 * - `NaN` is encoded as `0x7FC00000` (2139095040).
 * - `Infinity` is encoded as `0x7F800000` (2139095040).
 * - `-Infinity` is encoded as `0xFF800000` (4286578688).
 * - `-0` is encoded as `0x80000000` (2147483648).
 *
 * @param value The standard JavaScript number to encode.
 * @returns An encoded unsigned 32-bit integer that represents the input value.
 * @example
 * ```ts
 * import { encodeFloat32 } from "@nick/math/ieee754";
 *
 * console.log(encodeFloat32(3.14)); // 0x40490FDB (1078523339)
 *
 * const view = new DataView(new ArrayBuffer(4));
 * view.setUint32(0, encodeFloat32(3.14));
 * console.log(view.getUint32(0)); // 1078523339
 * console.log(view.getFloat32(0)); // 3.140625
 * ```
 * @category IEEE-754
 * @tags float32, encode
 */
export function encodeFloat32(value: number): number {
  return encode(value, {
    exponent: FLOAT32_EXPONENT_BITS,
    mantissa: FLOAT32_MANTISSA_BITS,
    bias: FLOAT32_EXPONENT_BIAS,
    nan: FLOAT32_NAN,
    positive_infinity: FLOAT32_POSITIVE_INFINITY,
    negative_infinity: FLOAT32_NEGATIVE_INFINITY,
    positive_zero: FLOAT32_POSITIVE_ZERO,
    negative_zero: FLOAT32_NEGATIVE_ZERO,
  });
}
