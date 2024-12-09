/**
 * Calculates the cube root of a number, handling negative values as well.
 *
 * @module cbrt
 */
import { abs } from "./abs.ts";
import { exp } from "./exp.ts";
import { log } from "./log.ts";

/**
 * Calculates the cube root of a number, handling negative values as well.
 *
 * @param x The number whose cube root is to be calculated.
 * @returns The cube root of the provided number.
 * @category Arithmetic
 */
export function cbrt(x: number): number {
  if (x === 0) return 0;
  const absX = abs(x);
  const result = exp(log(absX) / 3);
  return x < 0 ? -result : result;
}
