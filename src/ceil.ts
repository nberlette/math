/**
 * Performant local implementation of the `Math.ceil` function.
 *
 * @module ceil
 */

import { floor } from "./floor.ts";

/**
 * Performant local implementation of the `Math.ceil` function.
 *
 * @param x The number to round up to the nearest whole number
 * @returns The smallest integer greater than or equal to the provided number.
 * @category Rounding
 * @tags rounding, ceiling
 */
export function ceil(x: number): number {
  return (x = +x) < 0 ? -floor(-x) : x % 1 ? x - x % 1 + 1 : x;
}
