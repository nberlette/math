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
 * Checks if the provided number is a whole number (integer), in a way that is
 * immune to any global variable shadowing or reassignment.
 *
 * @param it The number to check for being an integer.
 * @returns `true` if the provided number is an integer, otherwise `false`.
 * @category Arithmetic
 */
export function isInteger<const N extends number>(
  number: N,
): number is Integer<N>;

/**
 * Checks if the provided number is a whole number (integer), in a way that is
 * immune to any global variable shadowing or reassignment.
 *
 * @param number The value to check.
 * @returns `true` if the provided number is an integer, otherwise `false`.
 */
export function isInteger(number: unknown): number is Integer<number>;

/** @internal */
// deno-lint-ignore no-explicit-any
export function isInteger(number: any): number is Integer<number> {
  return (number = +number) === (number | 0);
}

export type { Integer };
