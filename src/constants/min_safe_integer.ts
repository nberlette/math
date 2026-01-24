/**
 * This module provides runtime and type-level implementations of the
 * `MIN_SAFE_INTEGER` constant, matching `Number.MIN_SAFE_INTEGER`.
 *
 * @example
 * ```ts
 * import { MIN_SAFE_INTEGER } from "@nick/math/constants/min-safe-integer";
 * import assert from "node:assert";
 *
 * assert.strictEqual(MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
 * ```
 * @category Constants
 * @module min-safe-integer
 */

/**
 * Represents the smallest integer that can be represented in JavaScript
 * without losing precision, which is approximately equal to
 * `-9007199254740991`.
 *
 * This is a local implementation of the native `Number.MIN_SAFE_INTEGER`
 * constant.
 * @category Constants
 */
export const MIN_SAFE_INTEGER: MIN_SAFE_INTEGER = -9007199254740991;
/**
 * Type-level alias of the `MIN_SAFE_INTEGER` constant exported by this module. This allows
 * `MIN_SAFE_INTEGER` to be imported using a standard named import (i.e. the _value_ level)
 * or via type-only import for a compile-time only reference to the same value.
 *
 * @example
 * ```ts
 * import type { MIN_SAFE_INTEGER } from "@nick/math/constants/min-safe-integer";
 * import { expectType } from "jsr:@nick/is@0.2.0-rc.6/type/expect";
 *
 * expectType<MIN_SAFE_INTEGER>(-9007199254740991);
 * ```
 * @category Constants
 */
export type MIN_SAFE_INTEGER = -9007199254740991;
