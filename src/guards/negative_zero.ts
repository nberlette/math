/**
 * Checks if the provided number is a negative zero.
 *
 * @example
 * ```ts
 * import { isNegativeZero } from "@nick/math/guards/negative-zero";
 * import assert from "node:assert";
 *
 * assert.ok(isNegativeZero(-0));
 * ```
 * @module negative-zero
 */
import { isNegativeInfinity } from "./negative_infinity.ts";
import { NEGATIVE_ZERO } from "../constants/negative_zero.ts";

/**
 * Checks if the provided number is a negative zero.
 *
 * @param it The number to check for negative zero.
 * @returns `true` if the provided number is `-0`, otherwise `false`.
 * @category Guards
 * @tags Negative Zero
 */
export function isNegativeZero(it: number): it is NEGATIVE_ZERO {
  return (it = +it) === 0 && isNegativeInfinity(1 / it);
}

export { NEGATIVE_ZERO };
