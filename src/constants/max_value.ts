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
/**
 * Type-level alias of the `MAX_VALUE` constant exported by this module. This allows
 * `MAX_VALUE` to be imported using a standard named import (i.e. the _value_ level)
 * or via type-only import for a compile-time only reference to the same value.
 *
 * @example
 * ```ts
 * import type { MAX_VALUE } from "@nick/math/constants/max-value";
 * import { expectType } from "jsr:@nick/is@0.2.0-rc.6/type/expect";
 *
 * expectType<MAX_VALUE>(1.7976931348623157e308);
 * ```
 * @category Constants
 */
export type MAX_VALUE = 1.7976931348623157e308;
