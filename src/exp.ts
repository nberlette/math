/**
 * Performant local implementation of the `Math.exp` function.
 *
 * It does not rely on any native `Math.*` functions, using pure arithmetic to
 * calculate the exponential function of the provided number.
 *
 * @category Arithmetic
 * @module exp
 */

import { LN2, NAN, NEGATIVE_INFINITY, POSITIVE_INFINITY } from "./constants.ts";
import { floor } from "./floor.ts";
import { pow } from "./pow.ts";

/**
 * Performant local implementation of the `Math.exp` function.
 *
 * It does not rely on any native `Math.*` functions, using pure arithmetic to
 * calculate the exponential function of the provided number.
 *
 * @param x The number to calculate the exponential function of (e^x)
 * @returns The exponential function of the provided number.
 * @category Arithmetic
 * @example
 * ```ts no-eval
 * import { exp } from "@nick/math";
 * import { assertEquals } from "@std/assert";
 *
 * assertEquals(exp(0), 1);
 * assertEquals(exp(1), 2.718281828459045);
 * assertEquals(exp(2), 7.3890560989306495);
 * ```
 */
export function exp(x: number): number {
  if (x !== x) return NAN;
  if (x === NEGATIVE_INFINITY) return 0;
  if (x === POSITIVE_INFINITY) return POSITIVE_INFINITY;
  if (x === 0) return 1;
  if (x < 0) return 1 / exp(-x);
  const n = floor(x), z = x - n;
  return pow(2, n) * exp(z * LN2);
}
