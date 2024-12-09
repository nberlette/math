/**
 * Returns the smallest of its arguments, or `NaN` if any argument is `NaN`.
 * If no arguments are provided, the result is `Infinity`.
 *
 * @module min
 */
import { POSITIVE_INFINITY } from "./constants/positive_infinity.ts";

/**
 * Returns the smallest of its arguments, or `NaN` if any argument is `NaN`.
 * If no arguments are provided, the result is `Infinity`.
 *
 * @param numbers The numbers to compare.
 * @returns The smallest number in the list.
 * @category Comparison
 */
export function min(...numbers: number[]): number {
  let result = POSITIVE_INFINITY as number;
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number !== number) return number;
    if (number < result) result = number;
  }
  return result;
}
