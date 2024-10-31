/**
 * Performant local implementation of the `Math.cosh` function. This function
 * calculates the hyperbolic cosine of a number.
 *
 * @category Trigonometry
 * @module cosh
 */

import { exp } from "./exp.ts";

/**
 * Performant local implementation of the `Math.cosh` function. This function
 * calculates the hyperbolic cosine of a number.
 *
 * @param x The number whose hyperbolic cosine is to be calculated.
 * @returns The hyperbolic cosine of the provided number.
 * @category Trigonometry
 * @tags cosh, hyperbolic, cosine
 */
export function cosh(x: number): number {
  return (exp(x) + exp(-x)) / 2;
}
