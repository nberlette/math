/**
 * This module provides runtime and type-level implementations of the
 * `SQRT1_2` constant, matching `Math.SQRT1_2`.
 *
 * @example
 * ```ts
 * import { SQRT1_2 } from "@nick/math/constants/sqrt1_2";
 * import assert from "node:assert";
 *
 * assert.strictEqual(SQRT1_2, Math.SQRT1_2);
 * ```
 * @category Constants
 * @module sqrt1-2
 */

/**
 * The square root of `1/2`, approximately equal to `0.7071067811865476`.
 *
 * This is a local implementation of the native `Math.SQRT1_2` constant.
 * @category Constants
 */
export const SQRT1_2: SQRT1_2 = 0.7071067811865476;
/**
 * Type-level alias of the `SQRT1_2` constant exported by this module. This allows
 * `SQRT1_2` to be imported using a standard named import (i.e. the _value_ level)
 * or via type-only import for a compile-time only reference to the same value.
 *
 * @example
 * ```ts
 * import type { SQRT1_2 } from "@nick/math/constants/sqrt1_2";
 * import { expectType } from "jsr:@nick/is@0.2.0-rc.6/type/expect";
 *
 * expectType<SQRT1_2>(0.7071067811865476);
 * ```
 * @category Constants
 */
export type SQRT1_2 = 0.7071067811865476;
