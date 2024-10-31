/**
 * This module provides the mathematical constant `EPSILON` on the runtime
 * value-level, and also the compile-time type-only level.
 *
 * The `EPSILON` constant represents the difference between `1` and the
 * smallest value greater than `1` that can be represented as a `number` value.
 *
 * This is approximately equal to `2.220446049250313e-16`, and is provided as a
 * local implementation of the native `Number.EPSILON` constant.
 *
 * @module epsilon
 */

/**
 * Represents the smallest positive number that can be added to `1` to get a
 * result different from `1`.
 *
 * This is approximately equal to `2.220446049250313e-16`.
 *
 * @category Constants
 * @tags Number, Epsilon
 */
export const EPSILON: EPSILON = 2.220446049250313e-16;

export type EPSILON = 2.220446049250313e-16;
