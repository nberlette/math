/**
 * Truncates a number to an integer, removing any fractional digits.
 *
 * @example
 * ```ts
 * import * as math from "@nick/math";
 *
 * math.trunc(13.37); // 13
 * math.trunc(42.195); // 42
 * math.trunc(-7.8); // -7
 * math.trunc(-0.123); // 0
 * math.trunc(0); // 0
 * ```
 * @module trunc
 */
import { ceil } from "./ceil.ts";
import { floor } from "./floor.ts";

/**
 * Truncates a number to an integer, removing any fractional digits.
 *
 * This is a local implementation of the native `Math.trunc` function.
 *
 * @param x The number to truncate
 * @returns The integer part of the provided number.
 * @category Rounding
 * @example
 * ```ts
 * import * as math from "@nick/math";
 *
 * math.trunc(13.37); // 13
 * math.trunc(42.195); // 42
 * math.trunc(-7.8); // -7
 * math.trunc(-0.123); // 0
 * math.trunc(0); // 0
 * ```
 */
export function trunc(x: number): number {
  if ((x = +x) !== x) return x; // NaN
  return x < 0 ? x < -1 ? ceil(x) : -0 : x < 1 ? 0 : floor(x);
}
