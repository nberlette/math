/**
 * This module provides runtime and type-level implementations of the
 * `LOG2E` constant, the base-2 logarithm of e.
 *
 * @example
 * ```ts
 * import { LOG2E } from "@nick/math/constants/log2e";
 * import assert from "node:assert";
 *
 * assert.strictEqual(LOG2E, Math.LOG2E);
 * ```
 * @category Constants
 * @module log2e
 */

/**
 * Represents the base-2 logarithm of `e` (Euler's number), approximately equal
 * to `1.4426950408889634`.
 *
 * This is a local implementation of the native `Math.LOG2E` constant.
 * @category Constants
 */
export const LOG2E: LOG2E = 1.4426950408889634;
export type LOG2E = 1.4426950408889634;
