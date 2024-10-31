/**
 * Performant local implementation of the `Math.log2` function.
 *
 * It does not rely on any native `Math.*` functions, using pure arithmetic to
 * calculate the base-2 logarithm of the provided number.
 *
 * @param x The number to calculate the base-2 logarithm of (log₂)
 * @returns The base-2 logarithm of the provided number.
 * @category Arithmetic
 * @module log2
 */
import { LOG2E } from "./constants.ts";
import { log } from "./log.ts";

/**
 * Performant local implementation of the `Math.log2` function.
 *
 * It does not rely on any native `Math.*` functions, using pure arithmetic to
 * calculate the base-2 logarithm of the provided number.
 *
 * @param x The number to calculate the base-2 logarithm of (log₂)
 * @returns The base-2 logarithm of the provided number.
 * @category Arithmetic
 */
export function log2(x: number): number {
  return log(x) * LOG2E;
}
