/**
 * Negative Infinity is a special value representing negative infinity, which
 * is less than any other number. It is approximately equal to
 * `-1.7976931348623159e+308`.
 *
 * This is a local implementation of the native `Number.NEGATIVE_INFINITY`
 * constant.
 * @category Constants
 * @tags Infinity
 */
export const NEGATIVE_INFINITY: NEGATIVE_INFINITY = -1 / 0 as NEGATIVE_INFINITY;

/**
 * Special type used to represent `-Infinity` (negative infinity). TypeScript's
 * built-in types do not distinguish between positive/negative infinity and any
 * other `number`. However, its type checker _is_ capable of differentiating
 * between those types and other literal numbers.
 *
 * This type simply (ab)uses the type system's handling of scientific notation:
 * by using an arbitrary exponent in excess of `308`, the type checker can now
 * recognize and represent the type as `Infinity`. Great success!
 *
 * NB: Credit to Sindre Sorhus and his type-fest project for this approach.
 *
 * @category Types
 * @tags Infinity
 */
export type NEGATIVE_INFINITY = -1e333;
