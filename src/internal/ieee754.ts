// src/internal/ieee754.ts
/**
 * Shared generic implementation for IEEE‑754 binary floating‑point
 * encoding, decoding, and rounding.
 *
 * @module internal/ieee754
 */

import {
  isPositiveInfinity,
  POSITIVE_INFINITY,
} from "../guards/positive_infinity.ts";
import {
  isNegativeInfinity,
  NEGATIVE_INFINITY,
} from "../guards/negative_infinity.ts";
import { isNaN, NAN } from "../guards/nan.ts";
import { isNegativeZero, NEGATIVE_ZERO } from "../guards/negative_zero.ts";
import { isPositiveZero, POSITIVE_ZERO } from "../guards/positive_zero.ts";
import { abs } from "../abs.ts";
import { floor } from "../floor.ts";
import { log2 } from "../log2.ts";
import { pow } from "../pow.ts";
import { round } from "../round.ts";
import { BigInt, Number } from "./primordials.ts";

/** Descriptor for an IEEE‑754 binary floating‑point format. */
export interface BigIntFloatFormat extends Format {
  /** Controls the output type of the bit pattern. @default {false} */
  bigint: true;
}

/** Descriptor for an IEEE‑754 binary floating‑point format. */
export interface FloatFormat extends Format {
  /** Optional flag indicating the output type should be a number. */
  bigint?: false | undefined;
}

interface Format {
  /** Number of exponent bits (e.g. 8 for binary32). */
  exponent: number;
  /** Number of mantissa bits (e.g. 23 for binary32). */
  mantissa: number;
  /** Exponent bias (e.g. 127 for binary32). */
  bias: number;
  /** Encoded bit‑pattern for NaN. */
  nan: number | bigint;
  /** Encoded bit‑pattern for +∞. */
  positive_infinity: number | bigint;
  /** Encoded bit‑pattern for –∞. */
  negative_infinity: number | bigint;
  /** Encoded bit‑pattern for –0. */
  negative_zero: number | bigint;
  /** Encoded bit‑pattern for +0. */
  positive_zero: number | bigint;
  /** Optional flag indicating whether the output should be a bigint. */
  bigint?: boolean | undefined;
}

/**
 * Encode a JS number into an IEEE‑754 bit pattern (as a BigInt).
 *
 * @param value  The number to encode.
 * @param fmt    Describes exponent/mantissa sizes, bias, and specials.
 * @returns      The raw bits (as BigInt).
 * @internal
 */
export function encode(value: number, fmt: BigIntFloatFormat): bigint;
export function encode(value: number, fmt: FloatFormat): number;
export function encode(
  value: number,
  fmt: FloatFormat | BigIntFloatFormat,
): number | bigint {
  return (fmt.bigint ? BigInt : Number)(inner_encode(value, fmt));
}

function inner_encode(value: number, fmt: Format): number | bigint {
  if (isNaN(value)) return fmt.nan;
  if (isPositiveInfinity(value)) return fmt.positive_infinity;
  if (isNegativeInfinity(value)) return fmt.negative_infinity;
  if (isNegativeZero(value)) return fmt.negative_zero;
  if (isPositiveZero(value)) return fmt.positive_zero;

  const normal = 1 - fmt.bias;
  // subnormal threshold = 2^(1-bias)
  const cutoff = pow(2, normal);

  const sign = value < 0 ? 1n : 0n;
  const shift = BigInt(fmt.exponent + fmt.mantissa);
  const absolute = abs(value);
  if (absolute < cutoff) {
    // subnormal
    const scale = normal - fmt.mantissa;
    const mant = BigInt(round(absolute / pow(2, scale)));
    return (sign << shift) | mant;
  }

  // normal
  let expo = floor(log2(absolute)), mant = absolute / pow(2, expo);
  if (mant < 1) mant *= 2, expo--;

  const e = BigInt(expo + fmt.bias);
  const m = BigInt(round((mant - 1) * pow(2, fmt.mantissa)));
  return (sign << shift) | (e << BigInt(fmt.mantissa)) | m;
}

/**
 * Decode an IEEE‑754 bit pattern back into a JavaScript number.
 *
 * @param bits   The raw bits (BigInt or number).
 * @param fmt    Describes exponent/mantissa sizes, bias, and specials.
 * @returns      The decoded JS number.
 * @internal
 */
export function decode(
  bits: string | bigint | number,
  fmt: FloatFormat,
): number {
  const b = BigInt(bits);

  if (b === BigInt(fmt.nan)) return NAN;
  if (b === BigInt(fmt.positive_infinity)) return POSITIVE_INFINITY;
  if (b === BigInt(fmt.negative_infinity)) return NEGATIVE_INFINITY;
  if (b === BigInt(fmt.negative_zero)) return NEGATIVE_ZERO;
  if (b === BigInt(fmt.positive_zero)) return POSITIVE_ZERO;

  const shift = fmt.exponent + fmt.mantissa;
  const m = BigInt(fmt.mantissa), e = BigInt(fmt.exponent);
  const mask_m = (1n << m) - 1n;
  const mask_e = ((1n << e) - 1n) << m;

  const sign = ((b >> BigInt(shift)) & 1n) === 1n ? -1 : 1;
  const expo = (b & mask_e) >> m, mant = b & mask_m;

  if (expo === 0n) {
    // subnormal
    const subx = 1 - fmt.bias;
    return sign * Number(mant) * pow(2, subx - fmt.mantissa);
  } else if (expo === (1n << e) - 1n) {
    if (mant) return NAN;
    if (sign > 0) return POSITIVE_INFINITY;
    return NEGATIVE_INFINITY;
  }

  const exp = Number(expo) - fmt.bias;
  return sign * (1 + Number(mant) / pow(2, fmt.mantissa)) * pow(2, exp);
}

/**
 * Round a JS number to the nearest representable value in the given format.
 *
 * @param value  The number to round.
 * @param fmt    Describes exponent/mantissa sizes, bias, and specials.
 * @returns      The rounded JS number.
 * @internal
 */
export function fround(value: number, fmt?: FloatFormat): number {
  fmt ??= float32;
  return decode(encode(value, fmt), fmt);
}

/**
 * Represents the IEEE-754 binary16 (half-precision) floating-point format.
 *
 * @internal
 */
export const float16 = {
  exponent: 5,
  mantissa: 10,
  bias: 15,
  nan: 0x7E00n,
  positive_infinity: 0x7C00n,
  negative_infinity: 0xFC00n,
  negative_zero: 0x8000n,
  positive_zero: 0n,
} as const satisfies FloatFormat;

/**
 * Represents the IEEE-754 binary32 (single-precision) floating-point format.
 *
 * @internal
 */
export const float32 = {
  exponent: 8,
  mantissa: 23,
  bias: 127,
  nan: 0x7FC00000n,
  positive_infinity: 0x7F800000n,
  negative_infinity: 0xFF800000n,
  negative_zero: 0x80000000n,
  positive_zero: 0n,
} as const satisfies FloatFormat;

/**
 * Represents the IEEE-754 binary64 (double-precision) floating-point format.
 *
 * @internal
 */
export const float64 = {
  exponent: 11,
  mantissa: 52,
  bias: 1023,
  nan: 0x7FF8000000000000n,
  positive_infinity: 0x7FF0000000000000n,
  negative_infinity: 0xFFF0000000000000n,
  negative_zero: 0x8000000000000000n,
  positive_zero: 0n,
} as const satisfies FloatFormat;

/**
 * Represents the IEEE-754 binary128 (quadruple-precision) floating-point
 * format.
 *
 * @internal
 */
export const float128 = {
  exponent: 15,
  mantissa: 112,
  bias: 16383,
  nan: 0x7FFF8000000000000000000000000000n,
  positive_infinity: 0x7FFF0000000000000000000000000000n,
  negative_infinity: 0xFFFF0000000000000000000000000000n,
  negative_zero: 0x80000000000000000000000000000000n,
  positive_zero: 0n,
} as const satisfies FloatFormat;

/**
 * Represents all supported IEEE-754 floating-point formats.
 *
 * @internal
 */
export const formats = {
  float16,
  float32,
  float64,
  float128,
} as const satisfies Record<string, FloatFormat>;
