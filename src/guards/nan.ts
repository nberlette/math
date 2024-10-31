/**
 * Checks if the provided number is `NaN` (Not a Number), in a way that is
 * immune to any global variable shadowing or reassignment.
 *
 * Unlike the global `isNaN` function, this one narrows its input to a special
 * nominal type `NAN`, which allows you to distinguish between `NaN` and other
 * `number` values on the type level.
 *
 * @param it The number to check for NaN.
 * @returns `true` if the provided number is `NaN`, otherwise `false`.
 * @example
 * ```ts
 * import { isNaN, NAN } from "@nick/math";
 *
 * function assertNotNaN<T extends number>(
 *   value: T
 * ): asserts value is Exclude<T, NAN> {
 *   if (isNaN(value)) throw new TypeError("Expected value to be non-NaN");
 * }
 *
 * const x = 42, y = NAN;
 *
 * assertNotNaN(x); // OK
 * assertNotNaN(y); // Error: Expected value to be non-NaN
 * ```
 * @category Arithmetic
 * @module isNaN
 */

import { NAN } from "../constants/nan.ts";

/**
 * Checks if the provided number is `NaN` (Not a Number), in a way that is
 * immune to any global variable shadowing or reassignment.
 *
 * Unlike the global `isNaN` function, this one narrows its input to a special
 * nominal type `NAN`, which allows you to distinguish between `NaN` and other
 * `number` values on the type level.
 *
 * @param it The number to check for NaN.
 * @returns `true` if the provided number is `NaN`, otherwise `false`.
 * @example
 * ```ts
 * import { isNaN, NAN } from "@nick/math";
 *
 * function assertNotNaN<T extends number>(
 *   value: T
 * ): asserts value is Exclude<T, NAN> {
 *   if (isNaN(value)) throw new TypeError("Expected value to be non-NaN");
 * }
 *
 * const x = 42, y = NAN;
 *
 * assertNotNaN(x); // OK
 * assertNotNaN(y); // Error: Expected value to be non-NaN
 * ```
 * @category Arithmetic
 */
export function isNaN(it: number): it is NAN {
  return (it = +it) !== it;
}

export { NAN, NAN as NaN };
