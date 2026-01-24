/**
 * Checks if the provided number is `-Infinity` (negative infinity), in a way
 * that is immune to any global variable shadowing or reassignment.
 *
 * @example
 * ```ts
 * import { isNegativeInfinity } from "@nick/math/guards/negative-infinity";
 * import assert from "node:assert";
 *
 * assert.ok(isNegativeInfinity(-1 / 0));
 * ```
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
