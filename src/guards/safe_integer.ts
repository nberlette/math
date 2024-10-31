/**
 * Check if a value is a safe integer within the range of `MIN_SAFE_INTEGER`
 * (`-2^53 + 1`) and `MAX_SAFE_INTEGER` (`2^53 - 1`).
 *
 * This is a dependency-free, performant implementation that is functionally-
 * equivalent to the native `Number.isSafeInteger` function.
 *
 * @module safe-integer
 */
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
 * @param number The value to check.
 * @returns `true` if the value is a safe integer, `false` otherwise.
 */
export function isSafeInteger(number: unknown): number is SafeInteger;

/** @internal */
export function isSafeInteger(number: unknown): number is SafeInteger {
  return typeof number === "number" && isFinite(number) && isInteger(number) &&
    number >= MIN_SAFE_INTEGER && number <= MAX_SAFE_INTEGER;
}

export { MAX_SAFE_INTEGER, MIN_SAFE_INTEGER, type SafeInteger };
