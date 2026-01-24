/**
 * This module provides runtime and type-level implementations of the
 * `SQRT2` constant, matching `Math.SQRT2`.
 *
 * @example
 * ```ts
 * import { SQRT2 } from "@nick/math/constants/sqrt2";
 * import assert from "node:assert";
 *
 * assert.strictEqual(SQRT2, Math.SQRT2);
 * ```
 * @category Constants
 * @module sqrt2
 */

/**
 * The square root of `2`, approximately equal to `1.4142135623730951`.
 *
 * This is a local implementation of the native `Math.SQRT2` constant.
 * @category Constants
 */
export const SQRT2: SQRT2 = 1.4142135623730951;
/**
 * Type-level alias of the `SQRT2` constant exported by this module. This allows
 * `SQRT2` to be imported using a standard named import (i.e. the _value_ level)
 * or via type-only import for a compile-time only reference to the same value.
 *
 * @example
 * ```ts
 * import type { SQRT2 } from "@nick/math/constants/sqrt2";
 * import { expectType } from "jsr:@nick/is@0.2.0-rc.6/type/expect";
 *
 * expectType<SQRT2>(1.4142135623730951);
 * ```
 * @category Constants
 */
export type SQRT2 = 1.4142135623730951;
