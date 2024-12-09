/**
 * Clamps a number within the inclusive range specified by the lower and upper
 * bounds. This is useful for ensuring that a number does not exceed a certain
 * range, and is equivalent to `Math.min(Math.max(number, lower), upper)` (but
 * with no dependency on the global `Math` object).
 *
 * **Note**: this is a non-standard utility function.
 *
 * @module clamp
 */
import { max } from "./max.ts";
import { min } from "./min.ts";

/**
 * Clamps a number within the inclusive range specified by the lower and upper
 * bounds. This is useful for ensuring that a number does not exceed a certain
 * range, and is equivalent to `Math.min(Math.max(number, lower), upper)` (but
 * with no dependency on the global `Math` object).
 *
 * @param number The number to clamp
 * @param lower The lower bound of the clamp range
 * @param upper The upper bound of the clamp range
 * @returns The clamped value guaranteed to be within the provided range.
 * @category Rounding
 * @tags non-standard, clamp
 */
export function clamp(number: number, lower: number, upper: number): number {
  return max(lower, min(number, upper));
}
