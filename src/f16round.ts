/**
 * Rounds a number to the nearest 16-bit floating point value (half precision).
 *
 * Based on `Math.f16round` function from the TC39 Proposal for [Float16Array],
 * which began shipping in ES2024, this function follows the same rounding and
 * conversion rules as per the IEEE 754-2008 specification for half-precision
 * floating-point numbers (also known as binary16).
 *
 * [Float16Array]: https://github.com/tc39/proposal-float16array
 *
 * @module f16round
 */
import { roundFloat16 } from "./float16/round.ts";

/**
 * Rounds a number to the nearest 16-bit floating point value (half precision).
 *
 * Based on `Math.f16round` function from the TC39 Proposal for [Float16Array],
 * which began shipping in ES2024, this function follows the same rounding and
 * conversion rules as per the IEEE 754-2008 specification for half-precision
 * floating-point numbers (also known as binary16).
 *
 * [Float16Array]: https://github.com/tc39/proposal-float16array
 *
 * @param x The number to round.
 * @returns The 16-bit floating point rounded value of the number.
 * @category Rounding
 * @tags float, float16
 * @example
 * ```ts
 * import { f16round } from "@nick/math/f16round";
 * import { PI } from "@nick/math/constants";
 *
 * console.assert(f16round(PI) === 3.140625); // OK
 * ```
 */
export function f16round(x: number): number {
  return roundFloat16(x);
}
