/**
 * This module provides runtime and type-level implementations of the
 * `LOG10E` constant, the base-10 logarithm of e.
 *
 * @example
 * ```ts
 * import { LOG10E } from "@nick/math/constants/log10e";
 * import assert from "node:assert";
 *
 * assert.strictEqual(LOG10E, Math.LOG10E);
 * ```
 * @category Constants
 * @module log10e
 */

/**
 * Represents the base-10 logarithm of `e` (Euler's number), approximately
 * equal to `0.4342944819032518`.
 *
 * This is a local implementation of the native `Math.LOG10E` constant.
 * @category Constants
 */
export const LOG10E: LOG10E = 0.4342944819032518;
export type LOG10E = 0.4342944819032518;
