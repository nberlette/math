/**
 * Calculates the hyperbolic sine of a number.
 *
 * @example
 * ```ts
 * import { sinh } from "@nick/math/sinh";
 * import assert from "node:assert";
 *
 * assert.strictEqual(sinh(0), 0);
 * ```
 * @module sinh
 */

import { exp } from "./exp.ts";

/**
 * Calculates the hyperbolic sine of a number.
 *
 * @param x The number whose hyperbolic sine is to be calculated.
 * @returns The hyperbolic sine of the provided number.
 * @category Trigonometry
 */
export function sinh(x: number): number {
  if (x === 0) return x;
  return (exp(x) - exp(-x)) / 2;
}
