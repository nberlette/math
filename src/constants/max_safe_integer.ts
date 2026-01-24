/**
 * This module provides runtime and type-level implementations of the
 * `MAX_SAFE_INTEGER` constant, matching `Number.MAX_SAFE_INTEGER`.
 *
 * @example
 * ```ts
 * import { MAX_SAFE_INTEGER } from "@nick/math/constants/max-safe-integer";
 * import assert from "node:assert";
 *
 * assert.strictEqual(MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
 * ```
 * @category Constants
 * @module max-safe-integer
 */

/**
 * Represents the largest integer that can be represented in JavaScript without
 * losing precision, which is approximately equal to `9007199254740991`.
 *
 * This is a local implementation of the native `Number.MAX_SAFE_INTEGER`
 * constant.
 * @category Constants
 */
export const MAX_SAFE_INTEGER: MAX_SAFE_INTEGER = 9007199254740991;
export type MAX_SAFE_INTEGER = 9007199254740991;
