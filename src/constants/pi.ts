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
export type PI = 3.141592653589793;
