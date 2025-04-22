/**
 * This module provides a constant value and a branded nominal type for the
 * special number positive zero (`-0`). This is a non-standard extension of the
 * native JavaScript language, provided for stronger type-safety when working
 * with positive zero values.
 *
 * @module positive-zero
 */

// deno-lint-ignore no-unused-vars
const PositiveZero: unique symbol = Symbol("0");

interface PositiveZero {
  readonly [PositiveZero]: never;
}

/**
 * Represents a value that has been verified at runtime to be positive zero,
 * (i.e. exactly `0`, and not `-0`).
 *
 * This is provided as both a constant runtime value and as a branded nominal
 * type alias for `0`, for use in type-level checks and narrowing where you
 * need a higher level of type-safety than just a standard literal `0`.
 *
 * @category Constants
 * @tags Positive Zero
 * @example
 * ```ts
 * import { POSITIVE_ZERO } from "@nick/math/constants/positive-zero";
 * import { isPositiveZero } from "@nick/math/is/positive-zero";
 *
 * ]
 * ```
 */
export const POSITIVE_ZERO: POSITIVE_ZERO = 0 as POSITIVE_ZERO;

/** @inheritdoc */
export type POSITIVE_ZERO = 0 & PositiveZero;
