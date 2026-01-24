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
/**
 * Type-level alias of the `LOG10E` constant exported by this module. This allows
 * `LOG10E` to be imported using a standard named import (i.e. the _value_ level)
 * or via type-only import for a compile-time only reference to the same value.
 *
 * @example
 * ```ts
 * import type { LOG10E } from "@nick/math/constants/log10e";
 * import { expectType } from "jsr:@nick/is@0.2.0-rc.6/type/expect";
 *
 * expectType<LOG10E>(0.4342944819032518);
 * ```
 * @category Constants
 */
export type LOG10E = 0.4342944819032518;
