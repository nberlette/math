/**
 * Checks if the provided number is a whole number (integer), in a way that is
 * immune to any global variable shadowing or reassignment.
 *
 * @param it The number to check for being an integer.
 * @returns `true` if the provided number is an integer, otherwise `false`.
 * @category Arithmetic
 * @module isInteger
 */
import type { Integer } from "../types/integer.ts";

/**
 * Checks if the provided number is a whole number (integer), similar to
 * `Number.isInteger`, but values are coerced into numbers before checking.
 * For a check that matches `Number.isInteger` (no input coercion), see
 * {@linkcode isNumberInteger}.
 *
 * @param it The number to check for being an integer.
 * @returns `true` if the provided number is an integer, otherwise `false`.
 * @category Guards
 * @tags Integer
 */
export function isInteger<const N extends number>(
  number: N,
): number is Integer<N>;

/**
 * Checks if the provided number is a whole number (integer), similar to
 * `Number.isInteger`, but values are coerced into numbers before checking.
 * For a check that matches `Number.isInteger` (no input coercion), see
 * {@linkcode isNumberInteger}.
 *
 * @param number The value to check.
 * @returns `true` if the provided number is an integer, otherwise `false`.
 * @category Guards
 * @tags Integer
 */
export function isInteger(number: unknown): number is Integer<number>;

/** @internal */
// deno-lint-ignore no-explicit-any
export function isInteger(number: any): number is Integer<number> {
  return (number = +number) % 1 === 0;
}

/**
 * Checks if a given number is a whole number (integer), in a way that is
 * identical to the native `Number.isInteger` method (i.e., no coercion is
 * performed on inputs).
 *
 * @param number The value to check.
 * @returns `true` if the number is integral, otherwise `false`.
 * @category Guards
 * @tags Number, Integer
 */
export function isNumberInteger<const N extends number>(
  number: N,
): number is Integer<N> {
  return number % 1 === 0;
}

export type { Integer };
