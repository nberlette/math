/**
 * This module provides runtime and type-level implementations of the
 * `LN2` constant, the natural logarithm of 2.
 *
 * @example
 * ```ts
 * import { LN2 } from "@nick/math/constants/ln2";
 * import assert from "node:assert";
 *
 * assert.strictEqual(LN2, Math.LN2);
 * ```
 * @category Constants
 * @module ln2
 */

/**
 * Represents the natural logarithm of `2`, approximately equal to
 * `0.6931471805599453`.
 *
 * This is a local implementation of the native `Math.LN2` constant.
 * @category Constants
 */
export const LN2: LN2 = 0.6931471805599453;
export type LN2 = 0.6931471805599453;
