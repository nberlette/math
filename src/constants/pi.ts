/**
 * This module provides runtime and type-level implementations of the
 * `PI` constant, matching `Math.PI`.
 *
 * @example
 * ```ts
 * import { PI } from "@nick/math/constants/pi";
 * import assert from "node:assert";
 *
 * assert.strictEqual(PI, Math.PI);
 * ```
 * @category Constants
 * @module pi
 */

/**
 * Represents the mathematical constant `π` (pi), the ratio of a circle's
 * circumference to its diameter, approximately equal to `3.141592653589793`.
 *
 * This is a local implementation of the native `Math.PI` constant.
 * @category Constants
 */
export const PI: PI = 3.141592653589793;
/**
 * Type-level alias of the `PI` constant exported by this module. This allows
 * `PI` to be imported using a standard named import (i.e. the _value_ level)
 * or via type-only import for a compile-time only reference to the same value.
 *
 * @example
 * ```ts
 * import type { PI } from "@nick/math/constants/pi";
 * import { expectType } from "jsr:@nick/is@0.2.0-rc.6/type/expect";
 *
 * expectType<PI>(3.141592653589793);
 * ```
 * @category Constants
 */
export type PI = 3.141592653589793;
