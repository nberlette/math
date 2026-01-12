/**
 * Checks if the provided number is `-Infinity` (negative infinity), in a way
 * that is immune to any global variable shadowing or reassignment.
 *
 * @module negative-infinity
 */
import { NEGATIVE_INFINITY } from "../constants/negative_infinity.ts";

/**
 * Checks if the provided number is `-Infinity` (negative infinity), in a way
 * that is immune to any global variable shadowing or reassignment.
 *
 * @param it The number to check for negative infinity.
 * @returns `true` if the provided number is `-Infinity`, otherwise `false`.
 * @category Guards
 * @tags Negative Infinity
 */
export function isNegativeInfinity(it: number): it is NEGATIVE_INFINITY {
  return +it === NEGATIVE_INFINITY;
}

export { NEGATIVE_INFINITY };
