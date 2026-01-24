/**
 * This module provides runtime and type-level implementations of the
 * `MAX_VALUE` constant, matching `Number.MAX_VALUE`.
 *
 * @example
 * ```ts
 * import { MAX_VALUE } from "@nick/math/constants/max-value";
 * import assert from "node:assert";
 *
 * assert.strictEqual(MAX_VALUE, Number.MAX_VALUE);
 * ```
 * @category Constants
 * @module max-value
 */

/**
 * Represents the largest positive finite number that can be represented in
 * JavaScript, which is approximately equal to `1.7976931348623157e+308`.
 *
 * This is a local implementation of the native `Number.MAX_VALUE` constant.
 * @category Constants
 */
export const MAX_VALUE: MAX_VALUE = 1.7976931348623157e308;
export type MAX_VALUE = 1.7976931348623157e308;
