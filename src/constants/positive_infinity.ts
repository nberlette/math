/**
 * Positive Infinity is a special value representing positive infinity, which
 * is greater than any other number. It is approximately equal to
 * `1.7976931348623159e+308`.
 *
 * This is a local implementation of the native `Number.POSITIVE_INFINITY`
 * constant.
 * @category Constants
 * @tags Infinity
 */
export const POSITIVE_INFINITY: POSITIVE_INFINITY = 1 / 0 as POSITIVE_INFINITY;

/**
 * Special type used to represent `+Infinity` (positive infinity). TypeScript's
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
export type POSITIVE_INFINITY = 1e333;

export { POSITIVE_INFINITY as Infinity };
