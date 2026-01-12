/**
 * IEEE 754 floating point number manipulation.
 *
 * This module provides functions for encoding, decoding, and rounding floating
 * point numbers according to the IEEE 754 standard, for both 16-bit and 32-bit
 * precision. For utilities specific to 16-bit (half-precision) floats, see the
 * `float16` module. For 32-bit (single-precision), see the `float32` module.
 *
 * **Note**: The `float16` and `float32` modules are used under the hood by the
 * `f16round` and `fround` functions, respectively.
 *
 * @module ieee754
 */
export * from "./float16/index.ts";
export * from "./float32/index.ts";
