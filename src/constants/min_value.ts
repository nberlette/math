/**
 * This module provides runtime and type-level implementations of the
 * `MIN_VALUE` constant, matching `Number.MIN_VALUE`.
 *
 * @example
 * ```ts
 * import { MIN_VALUE } from "@nick/math/constants/min-value";
 * import assert from "node:assert";
 *
 * assert.strictEqual(MIN_VALUE, Number.MIN_VALUE);
 * ```
 * @category Constants
 * @module min-value
 */

/**
 * Represents the smallest positive number that is greater than zero, which is
 * approximately equal to `5e-324`.
 *
 * This is a local implementation of the native `Number.MIN_VALUE` constant.
 * @category Constants
 */
export const MIN_VALUE: MIN_VALUE = 5e-324;
export type MIN_VALUE = 5e-324;
