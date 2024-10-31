/**
 * Performant local implementation of the `Math.fround` function, which rounds
 * a number to the nearest 32-bit floating point value (single precision).
 *
 * @module fround
 */

import {
  isPositiveInfinity,
  POSITIVE_INFINITY,
} from "../guards/positive_infinity.ts";
import {
  isNegativeInfinity,
  NEGATIVE_INFINITY,
} from "../guards/negative_infinity.ts";
import { isNegativeZero } from "../guards/negative_zero.ts";
import { isNaN, NAN } from "../guards/nan.ts";
import { pow } from "../pow.ts";
import { log2 } from "../log2.ts";
import { floor } from "../floor.ts";
import { abs } from "../abs.ts";

export function encodeF32(value: number): number {
  if (isNaN(value)) return 0x7FC00000;
  if (isPositiveInfinity(value)) return 0x7F800000;
  if (isNegativeInfinity(value)) return 0xFF800000;
  if (isNegativeZero(value)) return 0x80000000;
  if (value === 0) return 0;

  const sign = value < 0 ? 1 : 0;
  value = abs(value);
  if (value === 0) return sign << 31;
  let expo = floor(log2(value));
  let mant = value / pow(2, expo);
  if (mant < 1) mant *= 2, expo -= 1;
  expo += 127;
  mant = floor((mant - 1) * pow(2, 23));
  return (sign << 31) | (expo << 23) | mant;
}

export function decodeF32(bits: number): number {
  if (bits === 0x7FC00000) return NAN;
  if (bits === 0x7F800000) return POSITIVE_INFINITY;
  if (bits === 0xFF800000) return NEGATIVE_INFINITY;
  if (bits === 0x80000000) return -0;
  if (bits === 0) return 0;

  const sign = ((bits >> 31) & 0x1) ? -1 : 1;
  const expo = (bits >> 23) & 0xFF;
  const mant = bits & 0x7FFFFF;

  // this branch should never be reached
  if (expo === 0xFF) return mant ? NAN : sign * POSITIVE_INFINITY;

  const e = expo ? expo - 127 : -126;
  const m = expo ? mant + pow(2, 23) : mant;
  const value = m * pow(2, e - 23);
  return sign * value;
}
