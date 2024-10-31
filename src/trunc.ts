/**
 * Truncates a number to an integer, removing any fractional digits.
 *
 * This is a local implementation of the native `Math.trunc` function.
 *
 * @example
 * ```ts
 * import { trunc } from "@nick/math";
 *
 * trunc(13.37); // 13
 * trunc(42.195); // 42
 * trunc(-7.8); // -7
 * trunc(-0.123); // 0
 * trunc(0); // 0
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
 * @category Arithmetic
 * @example
 * ```ts
 * import { trunc } from "@nick/math";
 *
 * trunc(13.37); // 13
 * trunc(42.195); // 42
 * trunc(-7.8); // -7
 * trunc(-0.123); // 0
 * trunc(0); // 0
 * ```
 * @module trunc
 */
export function trunc(x: number): number {
  return x < 0 ? x < -1 ? ceil(x) : -0 : x < 1 ? 0 : floor(x);
}
