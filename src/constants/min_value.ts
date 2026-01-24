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
/**
 * Type-level alias of the `MIN_VALUE` constant exported by this module. This allows
 * `MIN_VALUE` to be imported using a standard named import (i.e. the _value_ level)
 * or via type-only import for a compile-time only reference to the same value.
 *
 * @example
 * ```ts
 * import type { MIN_VALUE } from "@nick/math/constants/min-value";
 * import { expectType } from "jsr:@nick/is@0.2.0-rc.6/type/expect";
 *
 * expectType<MIN_VALUE>(5e-324);
 * ```
 * @category Constants
 */
export type MIN_VALUE = 5e-324;
