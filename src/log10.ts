/**
 * Performant local implementation of the `Math.log10` function.
 *
 * It does not rely on any native `Math.*` functions, using pure arithmetic to
 * calculate the base-10 logarithm of the provided number.
 *
 * @module log10
 */

import { LOG10E } from "./constants.ts";
import { log } from "./log.ts";

/**
 * Performant local implementation of the `Math.log10` function.
 *
 * It does not rely on any native `Math.*` functions, using pure arithmetic to
 * calculate the base-10 logarithm of the provided number.
 *
 * @param x The number to calculate the base-10 logarithm of (log₁₀)
 * @returns The base-10 logarithm of the provided number.
 * @category Arithmetic
 */
export function log10(x: number): number {
  return log(x) * LOG10E;
}
