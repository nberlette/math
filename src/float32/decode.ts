import { POSITIVE_INFINITY } from "../constants/positive_infinity.ts";
import { NEGATIVE_INFINITY } from "../constants/negative_infinity.ts";
import { NAN } from "../constants/nan.ts";
import { pow } from "../pow.ts";

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
 */
export function decodeFloat32(bits: number): number {
  if (bits === 0x7FC00000) return NAN;
  if (bits === 0x7F800000) return POSITIVE_INFINITY;
  if (bits === 0xFF800000) return NEGATIVE_INFINITY;
  if (bits === 0x80000000) return -0;
  if (bits === 0) return 0;

  const sign = ((bits >> 31) & 0x1) ? -1 : 1;
  const expo = (bits >> 23) & 0xFF;
  const mant = bits & 0x7FFFFF;

  if (expo === 0) return sign * pow(2, -126) * (mant / pow(2, 23));
  if (expo === 0xFF) return mant ? NAN : sign * POSITIVE_INFINITY;

  return sign * pow(2, expo - 127) * (1 + mant / pow(2, 23));
}
