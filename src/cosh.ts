/**
 * Calculates the hyperbolic cosine of a number.
 *
 * @module cosh
 */
import { exp } from "./exp.ts";

/**
 * Calculates the hyperbolic cosine of a number.
 *
 * @param x The number whose hyperbolic cosine is to be calculated.
 * @returns The hyperbolic cosine of the provided number.
 * @category Trigonometry
 * @tags hyperbolic, cosine
 */
export function cosh(x: number): number {
  return (exp(x) + exp(-x)) / 2;
}
