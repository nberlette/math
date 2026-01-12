/**
 * This module provides constants used by the encoding/decoding APIs in the
 * `@nick/math/float16` suite. These are primarily used to handle special cases
 * such as `NaN`, `Infinity`, and `-0`, which have unique representations in
 * the IEEE-754 half-precision floating point format.
 *
 * These are intended for primarily internal use, but are exported for the sake
 * of completeness and transparency, as well as for potential userland usage in
 * cases where the constants are needed for custom encoding/decoding logic.
 *
 * @module float16/constants
 */

import { FloatFormat } from "../internal/ieee754.ts";

/**
 * Well-known bit pattern representing `NaN` in the IEEE-754 half-precision (or
 * "binary16") format.
 *
 * @category Constants
 * @tags float16, ieee-754, NaN
 */
export const FLOAT16_NAN = 0x7E00;

/**
 * Well-known bit pattern representing `+Infinity` (positive infinity) in the
 * IEEE-754 half-precision (or "binary16") format.
 *
 * @category Constants
 * @tags float16, ieee-754, Infinity
 */
export const FLOAT16_POSITIVE_INFINITY = 0x7C00;

/**
 * Well-known bit pattern representing `-Infinity` (negative infinity) in the
 * IEEE-754 half-precision (or "binary16") format.
 *
 * @category Constants
 * @tags float16, ieee-754, Infinity
 */
export const FLOAT16_NEGATIVE_INFINITY = 0xFC00;

/**
 * Well-known bit pattern representing `-0` (negative zero) in the IEEE-754
 * half-precision (or "binary16") format.
 *
 * @category Constants
 * @tags float16, ieee-754, zero
 */
export const FLOAT16_NEGATIVE_ZERO = 0x8000;

/**
 * Well-known bit pattern representing `+0` (positive zero) in the IEEE-754
 * half-precision (or "binary16") format.
 *
 * **Note**: This constant, unlike the others, is equivalent to its bit pattern
 * representation (all bits are zero). As such, this is not strictly necessary
 * for encoding/decoding, but is included for completeness and consistency.
 *
 * @category Constants
 * @tags float16, ieee-754, zero
 */
export const FLOAT16_POSITIVE_ZERO = 0x0000;

/**
 * The number of bits used for the exponent in the IEEE-754 half-precision
 * (or "binary16") format.
 *
 * @category Constants
 * @tags float16, ieee-754, exponent
 */
export const FLOAT16_EXPONENT_BITS = 0x5;

/**
 * The number of bits used for the mantissa in the IEEE-754 half-precision
 * (or "binary16") format.
 *
 * @category Constants
 * @tags float16, ieee-754, mantissa
 */
export const FLOAT16_MANTISSA_BITS = 0xA;

/**
 * The exponent bias used in the IEEE-754 half-precision (or "binary16")
 * format.
 *
 * @category Constants
 * @tags float16, ieee-754, bias
 */
export const FLOAT16_EXPONENT_BIAS = 0xF;

/**
 * Represents the IEEE-754 binary16 (half-precision) floating-point format.
 *
 * @internal
 */
export default {
  exponent: FLOAT16_EXPONENT_BITS,
  mantissa: FLOAT16_MANTISSA_BITS,
  bias: FLOAT16_EXPONENT_BIAS,
  nan: FLOAT16_NAN,
  positive_infinity: FLOAT16_POSITIVE_INFINITY,
  negative_infinity: FLOAT16_NEGATIVE_INFINITY,
  negative_zero: FLOAT16_NEGATIVE_ZERO,
  positive_zero: FLOAT16_POSITIVE_ZERO,
} as const satisfies FloatFormat;
