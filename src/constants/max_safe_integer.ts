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
/**
 * Type-level alias of the `MAX_SAFE_INTEGER` constant exported by this module. This allows
 * `MAX_SAFE_INTEGER` to be imported using a standard named import (i.e. the _value_ level)
 * or via type-only import for a compile-time only reference to the same value.
 *
 * @example
 * ```ts
 * import type { MAX_SAFE_INTEGER } from "@nick/math/constants/max-safe-integer";
 * import { expectType } from "jsr:@nick/is@0.2.0-rc.6/type/expect";
 *
 * expectType<MAX_SAFE_INTEGER>(9007199254740991);
 * ```
 * @category Constants
 */
export type MAX_SAFE_INTEGER = 9007199254740991;
