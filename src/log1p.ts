/**
 * Calculates the natural logarithm of 1 + x (`log(1 + x)`), accurately even
 * for very small values of x.
 *
 * @example
 * ```ts
 * import { log1p } from "@nick/math/log1p";
 * import assert from "node:assert";
 *
 * assert.strictEqual(log1p(0), 0);
 * ```
 * @module log1p
 */
import { EPSILON } from "./constants/epsilon.ts";
import { NAN } from "./constants/nan.ts";
import { NEGATIVE_INFINITY } from "./constants/negative_infinity.ts";
import { abs } from "./abs.ts";
import { log } from "./log.ts";

/**
 * Calculates the natural logarithm of 1 + x (`log(1 + x)`), accurately even
 * for very small values of x.
 *
 * @param x The number whose logarithm of (1 + x) is to be calculated.
 * @returns The natural logarithm of 1 + x.
 * @category Logarithmic
 */
export function log1p(x: number): number {
  if (x === -1) return NEGATIVE_INFINITY;
  if (x < -1) return NAN;
  if (abs(x) < EPSILON) return x;
  return log(1 + x);
}
