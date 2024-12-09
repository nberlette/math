/**
 * Calculates the base number raised to the power of the exponent.
 *
 * @module pow
 */

/**
 * Calculates the base number raised to the power of the exponent.
 *
 * **Note**: the `**` operator is equivalent to the `^` operator in standard
 * mathematical notation, and is used to raise a number to a power. For those
 * unfamiliar with its syntax: `x ** y` is the same as `x^y`.
 *
 * @param x The base number to raise to the power of `y`
 * @param y The exponent to raise the base number by
 * @returns The base number raised to the power of the exponent.
 * @category Exponentiation
 * @example
 * ```ts
 * import { pow } from "@nick/math";
 *
 * const MAX_SAFE_INTEGER = pow(2, 53) - 1;
 *
 * const foursquared = pow(4, 2); // 16
 *
 * const infinity = pow(1, 309); // Infinity
 *
 * const almost_infinity = pow(1, 308); // 1.7976931348623157e+308
 * ```
 */
export function pow(x: number, y: number): number {
  return x ** y;
}
