/**
 * Rounds a number to the nearest whole number.
 *
 * @module round
 */
import { floor } from "./floor.ts";

/**
 * Rounds a number to the nearest whole number.
 *
 * @param x The number to round to the nearest whole number
 * @returns The nearest whole number to the provided number.
 * @category Rounding
 */
export function round(x: number): number {
  x = +x;
  if (x !== x || x === 0) return x;
  const rounded = floor(x + 0.5);
  return rounded === 0 && x < 0 ? -0 : rounded;
}
