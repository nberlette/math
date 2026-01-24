/**
 * This module provides a constant value for the mathematical constant `e` on
 * the runtime value-level, and also the compile-time type-only level.
 *
 * @example
 * ```ts
 * import { E } from "@nick/math/constants/e";
 * import assert from "node:assert";
 *
 * assert.strictEqual(E, Math.E);
 * ```
 * @module e
 */

/**
 * Represents the mathematical constant `e` (Euler's number), the base of the
 * natural logarithm, approximately equal to `2.718281828459045`.
 *
 * This is a local implementation of the native `Math.E` constant.
 * @category Constants
 * @tags E
 */
export const E: E = 2.718281828459045;

/**
 * Type-level alias of the `E` constant exported by this module. This allows
 * `E` to be imported using a standard named import (i.e. the _value_ level)
 * or via type-only import for a compile-time only reference to the same value.
 *
 * @example
 * ```ts
 * import type { E } from "@nick/math/constants/e";
 * import { expectType } from "jsr:@nick/is@0.2.0-rc.6/type/expect";
 *
 * expectType<E>(2.718281828459045);
 * ```
 * @category Constants
 */
export type E = 2.718281828459045;
