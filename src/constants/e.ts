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

export type E = 2.718281828459045;
