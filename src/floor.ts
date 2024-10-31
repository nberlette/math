/**
 * Performant local implementation of the `Math.floor` function.
 *
 * @category Arithmetic
 * @module floor
 */
import { ceil } from "./ceil.ts";

/**
 * Performant local implementation of the `Math.floor` function.
 *
 * @param x The number to round down to the nearest whole number
 * @returns The largest integer less than or equal to the provided number.
 * @category Arithmetic
 * @tags rounding, floor
 */
export function floor(x: number): number {
  return (x = +x) < 0 ? -ceil(-x) : x - x % 1;
}
