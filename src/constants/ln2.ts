/**
 * This module provides runtime and type-level implementations of the
 * `LN2` constant, the natural logarithm of 2.
 *
 * @example
 * ```ts
 * import { LN2 } from "@nick/math/constants/ln2";
 * import assert from "node:assert";
 *
 * assert.strictEqual(LN2, Math.LN2);
 * ```
 * @category Constants
 * @module ln2
 */

/**
 * Represents the natural logarithm of `2`, approximately equal to
 * `0.6931471805599453`.
 *
 * This is a local implementation of the native `Math.LN2` constant.
 * @category Constants
 */
export const LN2: LN2 = 0.6931471805599453;
/**
 * Type-level alias of the `LN2` constant exported by this module. This allows
 * `LN2` to be imported using a standard named import (i.e. the _value_ level)
 * or via type-only import for a compile-time only reference to the same value.
 *
 * @example
 * ```ts
 * import type { LN2 } from "@nick/math/constants/ln2";
 * import { expectType } from "jsr:@nick/is@0.2.0-rc.6/type/expect";
 *
 * expectType<LN2>(0.6931471805599453);
 * ```
 * @category Constants
 */
export type LN2 = 0.6931471805599453;
