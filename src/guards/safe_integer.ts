/**
 * Check if a value is a safe integer within the range of `MIN_SAFE_INTEGER`
 * (`-2^53 + 1`) and `MAX_SAFE_INTEGER` (`2^53 - 1`).
 *
 * This is a dependency-free, performant implementation that is functionally-
 * equivalent to the native `Number.isSafeInteger` function.
 *
 * Note: This guard **does not coerce its input to a number** beforehand. The
 * value passed for `number` must already satisfy `typeof number === "number"`.
 *
 * @module safe-integer
 */
import { isFinite } from "./finite.ts";
import { isInteger } from "./integer.ts";

import { MAX_SAFE_INTEGER } from "../constants/max_safe_integer.ts";
import { MIN_SAFE_INTEGER } from "../constants/min_safe_integer.ts";
import type { SafeInteger } from "../types/safe_integer.ts";

/**
 * Check if a value is a safe integer within the range of `MIN_SAFE_INTEGER`
 * (`-2^53 + 1`) and `MAX_SAFE_INTEGER` (`2^53 - 1`).
 *
 * This is a dependency-free, performant implementation that is functionally-
 * equivalent to the native `Number.isSafeInteger` function.
 *
 * Note: This guard **does not coerce its input to a number** beforehand. The
 * value passed for `number` must already satisfy `typeof number === "number"`.
 *
 * @template {number} N The type of numeric value to check.
 * @param number The value to check.
 * @returns `true` if the value is a safe integer, `false` otherwise.
 * @category Guards
 * @tags Safe Integer
 */
export function isSafeInteger<N extends number>(
  number: N,
): number is SafeInteger<N>;

/**
 * Check if a value is a safe integer within the range of `MIN_SAFE_INTEGER`
 * (`-2^53 + 1`) and `MAX_SAFE_INTEGER` (`2^53 - 1`).
 *
 * Note: This guard **does not coerce its input to a number** beforehand. The
 * value passed for `number` must already satisfy `typeof number === "number"`.
 *
 * @param number The value to check.
 * @returns `true` if the value is a safe integer, `false` otherwise.
 */
export function isSafeInteger(number: number): number is SafeInteger;

/** @internal */
export function isSafeInteger(number: unknown): number is SafeInteger {
  return typeof number === "number" && isFinite(number) && (number % 1) === 0 &&
    number >= MIN_SAFE_INTEGER && number <= MAX_SAFE_INTEGER;
}

export { MAX_SAFE_INTEGER, MIN_SAFE_INTEGER, type SafeInteger };
