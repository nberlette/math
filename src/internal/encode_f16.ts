import {
  isNegativeInfinity,
  isPositiveInfinity,
  NEGATIVE_INFINITY,
  POSITIVE_INFINITY,
} from "../guards/infinity.ts";
import { isNaN, NAN } from "../guards/nan.ts";
import { abs } from "../abs.ts";
import { floor } from "../floor.ts";
import { log2 } from "../log2.ts";
import { pow } from "../pow.ts";
import { round } from "../round.ts";
import { isNegativeZero } from "../guards/negative_zero.ts";

export function encodeF16(value: number): number {
  if (isNaN(value)) return 0x7E00;
  if (isPositiveInfinity(value)) return 0x7C00;
  if (isNegativeInfinity(value)) return 0xFC00;
  if (isNegativeZero(value)) return 0x8000;
  if (value === 0) return 0;

  const sign = value < 0 ? 1 : 0;
  value = abs(value);
  if (value === 0) return sign << 15;
  let expo = floor(log2(value));
  let mant = value / pow(2, expo);
  if (mant < 1) mant *= 2, expo -= 1;
  expo += 15;
  mant = round((mant - 1) * pow(2, 10));
  return (sign << 15) | (expo << 10) | mant;
}

export function decodeF16(bits: number): number {
  if (bits === 0x7E00) return NAN;
  if (bits === 0x7C00) return POSITIVE_INFINITY;
  if (bits === 0xFC00) return NEGATIVE_INFINITY;
  if (bits === 0x8000) return -0;
  if (bits === 0) return 0;

  const sign = ((bits >> 15) & 0x1) ? -1 : 1;
  const expo = (bits >> 10) & 0x1F;
  const mant = bits & 0x3FF;

  if (expo === 0) return sign * pow(2, -14) * (mant / pow(2, 10));
  if (expo === 0x1F) return sign * (mant ? NAN : POSITIVE_INFINITY);

  return sign * pow(2, expo - 15) * (1 + mant / pow(2, 10));
}
