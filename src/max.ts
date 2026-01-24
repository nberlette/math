/**
 * Returns the largest of its arguments, or `NaN` if any argument is `NaN`.
 * If no arguments are provided, the result is `-Infinity`.
 *
 * @example
 * ```ts
 * import { max } from "@nick/math/max";
 * import assert from "node:assert";
 *
 * assert.strictEqual(max(1, 3, 2), 3);
 * assert.strictEqual(max(-1, -5), -1);
 * ```
 * @module max
 */
import { NEGATIVE_INFINITY } from "./constants/negative_infinity.ts";

/**
 * Returns the largest of its arguments, or `NaN` if any argument is `NaN`.
 * If no arguments are provided, the result is `-Infinity`.
 *
 * This function is designed as a fast alternative to the built-in `Math.max`
 * function. It is optimized for performance, and isn't susceptible to any
 * global state changes or monkey-patching that might affect the built-in
 * `Math.max` function.
 *
 * @param numbers The numbers to compare.
 * @returns The largest number in the list.
 * @category Comparison
 * @example
 * ```ts
 * import { max } from "@nick/math";
 *
 * const largest = max(1, 2); // 2
 * const alsoLargest = max(-1, 0); // 0
 * ```
 */
export function max(...numbers: number[]): number {
  let result = NEGATIVE_INFINITY as number;
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number !== number) return number;
    if (number > result) result = number;
  }
  return result;
}
