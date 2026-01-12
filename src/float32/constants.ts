/**
 * This module provides constants used by the encoding/decoding APIs in the
 * `@nick/math/float32` suite. These are primarily used to handle special cases
 * such as `NaN`, `Infinity`, and `-0`, which have unique representations in
 * the IEEE-754 half-precision floating point format.
 *
 * These are intended for primarily internal use, but are exported for the sake
 * of completeness and transparency, as well as for potential userland usage in
 * cases where the constants are needed for custom encoding/decoding logic.
 *
 * @module float32/constants
 */

import { FloatFormat } from "../internal/ieee754.ts";

/**
 * The number of bits used for the exponent in the IEEE-754 single-precision
 * (or "binary32") format.
 *
 * @category Constants
 * @tags float32, ieee-754, exponent
 */
export const FLOAT32_EXPONENT_BITS = 0x8;

/**
 * The number of bits used for the mantissa in the IEEE-754 single-precision
 * (or "binary32") format.
 *
 * @category Constants
 * @tags float32, ieee-754, mantissa
 */
export const FLOAT32_MANTISSA_BITS = 23;

/**
 * The exponent bias used in the IEEE-754 single-precision (or "binary32") format.
 *
 * @category Constants
 * @tags float32, ieee-754, exponent, bias
 */
export const FLOAT32_EXPONENT_BIAS = 127;

/**
 * Well-known bit pattern representing `NaN` in the IEEE-754 single-precision (or
 * "binary32") format.
 *
 * @category Constants
 * @tags float32, ieee-754, NaN
 */
export const FLOAT32_NAN = 0x7FC00000;

/**
 * Well-known bit pattern representing `+Infinity` (positive infinity) in the
 * IEEE-754 single-precision (or "binary32") format.
 *
 * @category Constants
 * @tags float32, ieee-754, Infinity
 */
export const FLOAT32_POSITIVE_INFINITY = 0x7F800000;

/**
 * Well-known bit pattern representing `-Infinity` (negative infinity) in the
 * IEEE-754 single-precision (or "binary32") format.
 *
 * @category Constants
 * @tags float32, ieee-754, Infinity
 */
export const FLOAT32_NEGATIVE_INFINITY = 0xFF800000;

/**
 * Well-known bit pattern representing `-0` (negative zero) in the IEEE-754
 * single-precision (or "binary32") format.
 *
 * @category Constants
 * @tags float32, ieee-754, zero
 */
export const FLOAT32_NEGATIVE_ZERO = 0x80000000;

/**
 * Well-known bit pattern representing `+0` (positive zero) in the IEEE-754
 * single-precision (or "binary32") format.
 *
 * **Note**: This constant, unlike the others, is equivalent to its bit pattern
 * representation (all bits are zero). As such, this is not strictly necessary
 * for encoding/decoding, but is included for completeness and consistency.
 *
 * @category Constants
 * @tags float32, ieee-754, zero
 */
export const FLOAT32_POSITIVE_ZERO = 0x00000000;

/**
 * Represents the IEEE-754 binary32 (single-precision) floating-point format.
 *
 * @internal
 */
export default {
  exponent: FLOAT32_EXPONENT_BITS,
  mantissa: FLOAT32_MANTISSA_BITS,
  bias: FLOAT32_EXPONENT_BIAS,
  nan: FLOAT32_NAN,
  positive_infinity: FLOAT32_POSITIVE_INFINITY,
  negative_infinity: FLOAT32_NEGATIVE_INFINITY,
  negative_zero: FLOAT32_NEGATIVE_ZERO,
  positive_zero: FLOAT32_POSITIVE_ZERO,
} as const satisfies FloatFormat;
