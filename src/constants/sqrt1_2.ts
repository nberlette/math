/**
 * This module provides runtime and type-level implementations of the
 * `SQRT1_2` constant, matching `Math.SQRT1_2`.
 *
 * @example
 * ```ts
 * import { SQRT1_2 } from "@nick/math/constants/sqrt1_2";
 * import assert from "node:assert";
 *
 * assert.strictEqual(SQRT1_2, Math.SQRT1_2);
 * ```
 * @category Constants
 * @module sqrt1-2
 */

/**
 * The square root of `1/2`, approximately equal to `0.7071067811865476`.
 *
 * This is a local implementation of the native `Math.SQRT1_2` constant.
 * @category Constants
 */
export const SQRT1_2: SQRT1_2 = 0.7071067811865476;
export type SQRT1_2 = 0.7071067811865476;
