/**
 * Checks if the provided number is `+Infinity` (positive infinity), in a way
 * that is immune to any global variable shadowing or reassignment.
 *
 * @example
 * ```ts
 * import { isPositiveInfinity } from "@nick/math/guards/positive-infinity";
 * import assert from "node:assert";
 *
 * assert.ok(isPositiveInfinity(1 / 0));
 * ```
 * @module positive-infinity
 */
import { POSITIVE_INFINITY } from "../constants/positive_infinity.ts";

/**
 * Checks if the provided number is `+Infinity` (positive infinity), in a way
 * that is immune to any global variable shadowing or reassignment.
 *
 * @param it The number to check for positive infinity.
 * @returns `true` if the provided number is `+Infinity`, otherwise `false`.
 * @category Guards
 * @tags Positive Infinity
 */
export function isPositiveInfinity(it: number): it is POSITIVE_INFINITY {
  return +it === POSITIVE_INFINITY;
}

export { POSITIVE_INFINITY };
