/**
 * Not a Number (`NaN`) is a special value representing all values which are
 * not valid numbers. It is approximately equal to `0 / 0`, meaning it is a
 * non-representable, non-finite, non-zero result of an invalid math operation.
 *
 * `NaN` is the only value in JavaScript which is not less than, greater than,
 * nor equal to any other value, including itself. It is the result of invalid
 * mathematical operations, such as dividing zero by zero, or parsing a string
 * that does not represent a valid number with `parseInt` or `parseFloat`.
 *
 * @module nan
 */

// purposely kept private and local to this module only, preventing external
// code from imitating the `NaN` type below.
const Not_a_Number: unique symbol = Symbol("Is_NaN");
type Not_a_Number = typeof Not_a_Number;

/**
 * Special nominal type representing the "Not a Number" (`NaN`) value. This is
 * used to distinguish between `NaN` and other `number` values on a type-only
 * level, allowing you to perform type narrowing and checking for `NaN` values
 * in a type-safe manner.
 *
 * This is the internal unforgeable brand that is used to create the `NAN` type
 * exported from this module. It is purposely kept private and local to this
 * module only, to prevent any imitation or manipulation from external code.
 *
 * @internal
 * @private
 */
// we use an interface here so that `NaN` is opaque, and does not immediately
// reveal its structure in things like intellisense hover previews. a drawback
// of this approach is that interfaces are open-ended, so it's possible to
// extend it with additional members. and therefore... we do not export it.
interface NaN {
  readonly [Not_a_Number]: never;
}

/**
 * Represents the special value "Not a Number" (`NaN`), which is used to denote
 * an invalid number. It is approximately equivalent to `0 / 0`.
 *
 * This is a local implementation of the native `Number.NaN` constant.
 *
 * @category Constants
 * @tags Number, NaN
 */
export const NAN: NAN = 0 / 0 as NAN;

/**
 * Currently, TypeScript does not provide a built-in solution to distinguish
 * `NaN` from other non-literal `number` value. This type helps fill that gap.
 */
export type NAN = number & NaN;

export { NAN as NaN };
