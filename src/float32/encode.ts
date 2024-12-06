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
 */
export function encodeFloat32(value: number): number {
  if (isNaN(value)) return 0x7FC00000;
  if (isPositiveInfinity(value)) return 0x7F800000;
  if (isNegativeInfinity(value)) return 0xFF800000;
  if (isNegativeZero(value)) return 0x80000000;
  if (value === 0) return 0;

  const sign = value < 0 ? 1 : 0;
  value = abs(value);

  // Subnormal
  if (value < pow(2, -126)) return (sign << 31) | round(value / pow(2, -149));

  let expo = floor(log2(value));
  let mant = value / pow(2, expo);
  if (mant < 1) {
    mant *= 2;
    expo -= 1;
  }
  expo += 127;

  mant = round((mant - 1) * pow(2, 23));
  return (sign << 31) | (expo << 23) | mant;
}
