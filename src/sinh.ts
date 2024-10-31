/**
 * Performant local implementation of the `Math.sinh` function. This function
 * calculates the hyperbolic sine of a number.
 *
 * @module sinh
 */

import { exp } from "./exp.ts";

/**
 * Performant local implementation of the `Math.sinh` function. This function
 * calculates the hyperbolic sine of a number.
 *
 * @param x The number whose hyperbolic sine is to be calculated.
 * @returns The hyperbolic sine of the provided number.
 * @category Trigonometry
 */
export function sinh(x: number): number {
  return (exp(x) - exp(-x)) / 2;
}
