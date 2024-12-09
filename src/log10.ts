/**
 * Calculates the base-10 logarithm of a number.
 *
 * @module log10
 */
import { LOG10E } from "./constants/log10e.ts";
import { log } from "./log.ts";

/**
 * Calculates the base-10 logarithm of a number.
 *
 * @param x The number to calculate the base-10 logarithm of (log₁₀)
 * @returns The base-10 logarithm of the provided number.
 * @category Logarithmic
 */
export function log10(x: number): number {
  return log(x) * LOG10E;
}
