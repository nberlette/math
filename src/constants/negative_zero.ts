/**
 * This module provides a constant value and a branded nominal type for the
 * special number negative zero (`-0`). This is a non-standard extension of the
 * native JavaScript language, provided for stronger type-safety when working
 * with negative zero values.
 *
 * @module negative-zero
 */

// deno-lint-ignore no-unused-vars
const NegativeZero: unique symbol = Symbol("-0");

interface NegativeZero {
  readonly [NegativeZero]: never;
}

/**
 * Represents the special number negative zero (`-0`).
 *
 * @category Constants
 * @tags Negative Zero
 */
export const NEGATIVE_ZERO: NEGATIVE_ZERO = -0 as NEGATIVE_ZERO;

/**
 * @remarks
 * TypeScript is not capable of distinguishing `-0` from `0` on a type level.
 * This type helps fill that gap by providing a branded nominal type for it,
 * allowing you to perform strict type checking and narrowing against negative
 * zero values.
 *
 * @see {@linkcode isNegativeZero} to check runtime values against this type.
 */
export type NEGATIVE_ZERO = -0 & NegativeZero;
