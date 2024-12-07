/**
 * This module provides functions for encoding standard JavaScript numbers into
 * 16-bit half-precision floating point numbers (`Float16`) that follow the
 * IEEE 754-2008 standard for half-precision binary16 floating point numbers.
 *
 * The `Float16` format is a 16-bit representation of a floating point number
 * that is used to store floating point values in a DataView or TypedArray.
 * This format is used in graphics programming and other performance-sensitive
 * applications.
 *
 * The `encodeFloat16` function encodes a standard JavaScript number into a
 * 16-bit half-precision floating point value, which can be stored in a
 * DataView via `setUint16`, or used in other applications that require the
 * `Float16` format.
 *
 * @module float16/encode
 */
import { isPositiveInfinity } from "../guards/positive_infinity.ts";
import { isNegativeInfinity } from "../guards/negative_infinity.ts";
import { isNaN } from "../guards/nan.ts";
import { isNegativeZero } from "../guards/negative_zero.ts";
import { abs } from "../abs.ts";
import { floor } from "../floor.ts";
import { log2 } from "../log2.ts";
import { pow } from "../pow.ts";
import { round } from "../round.ts";

/**
 * Encodes a standard JavaScript number (a 64-bit double-precision floating
 * point value, 52 bits of mantissa) into a 16-bit unsigned integer (Uint16).
 * This function follows the IEEE 754-2008 standard for half-precision 16-bit
 * floating point numbers, also known as `Float16` (or `binary16` in the spec).
 *
 * This function is used internally by the {@linkcode f16round} function to
 * convert the input number into a portable intermediate form, which it then
 * transforms into the `Float16` format via the {@linkcode decodeFloat16}.
 *
 * The returned value can be used to store half-precision floating point values
 * in a DataView via `setUint16`, since it is equivalent to the result of the
 * method `DataView.prototype.getUint16` when reading a half-precision float.
 *
 * ## Encoding Scheme
 *
 * The encoding scheme varies based on the input value classification:
 *
 * - Normal (within the normal range of representable values)
 * - Subnormal (too small to be represented with full precision)
 * - Special cases
 *
 * ## Special Cases
 *
 * The following special cases are handled separately, short-circuiting the
 * encoding process to return a well-known constant value:
 *
 * - `NaN` is encoded as `0x7E00` (32256).
 * - `Infinity` is encoded as `0x7C00` (31744).
 * - `-Infinity` is encoded as `0xFC00` (64512).
 * - `-0` is encoded as `0x8000` (32768).
 *
 * @param value The standard JavaScript number to encode.
 * @returns An encoded unsigned 16-bit integer that represents the input value.
 * @example
 * ```ts
 * import { encodeFloat16 } from "@nick/math/float16";
 *
 * console.log(encodeFloat16(3.14)); // 0x4248 (16968)
 *
 * const view = new DataView(new ArrayBuffer(2));
 * view.setUint16(0, encodeFloat16(3.14));
 * console.log(view.getUint16(0)); // 16968
 * console.log(view.getFloat16(0)); // 3.140625
 * ```
 * @category IEEE-754
 * @tags float16, float, encode
 */
export function encodeFloat16(value: number): number {
  if (isNaN(value)) return 0x7E00;
  if (isPositiveInfinity(value)) return 0x7C00;
  if (isNegativeInfinity(value)) return 0xFC00;
  if (isNegativeZero(value)) return 0x8000;
  if (value === 0) return 0;

  const sign = value < 0 ? 1 : 0;
  value = abs(value);

  // handle subnormal (really small) numbers
  if (value < pow(2, -14)) return (sign << 15) | round(value / pow(2, -24));

  let expo = floor(log2(value));
  let mant = value / pow(2, expo);
  if (mant < 1) mant *= 2, expo -= 1;
  expo += 15;

  mant = round((mant - 1) * pow(2, 10));
  return (sign << 15) | (expo << 10) | mant;
}
