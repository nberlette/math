/**
 * @category Exponential
 * @module exp
 */
import { EPSILON } from "./constants/epsilon.ts";
import { isNegativeInfinity } from "./guards/negative_infinity.ts";
import { isPositiveInfinity } from "./guards/positive_infinity.ts";
import { isNaN } from "./guards/nan.ts";
import { abs } from "./abs.ts";

/**
 * Calculates the exponential function of a number, returning `e^x`.
 *
 * This is functionally equivalent to the `Math.exp` function.
 *
 * @param x The number to calculate the exponential function of (e^x)
 * @returns The exponential function of the provided number.
 * @category Exponential
 * @example
 * ```ts no-eval
 * import { exp } from "@nick/math";
 * import assert from "node:assert";
 *
 * assert.equal(exp(0), 1);
 * assert.equal(exp(1), 2.7182818284590455);
 * assert.equal(exp(2), 7.389056098930649);
 * ```
 */
export function exp(x: number): number {
  if (isNegativeInfinity(x)) return 0;
  if (isPositiveInfinity(x) || isNaN(x)) return x;
  if (x === 0) return 1;

  const a = abs(x);
  let result = 1, term = 1, iteration = 1;

  // Using Taylor series expansion to approximate e^x
  while (term > EPSILON) {
    term *= a / iteration;
    result += term;
    iteration += 1;
  }

  return x < 0 ? 1 / result : result;
}
