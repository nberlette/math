/**
 * Calculates the hyperbolic sine of a number.
 *
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
