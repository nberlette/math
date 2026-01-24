/**
 * Calculates the inverse hyperbolic tangent of a number, returning a value in
 * the range `[-∞, +∞]`.
 *
 * @example
 * ```ts
 * import { atanh } from "@nick/math/atanh";
 * import assert from "node:assert";
 *
 * assert.strictEqual(atanh(0), 0);
 * ```
 * @module atanh
 */
import { isNaN, NAN } from "./guards/nan.ts";
import { POSITIVE_INFINITY } from "./constants/positive_infinity.ts";
import { log1p } from "./log1p.ts";

/**
 * Calculates the inverse hyperbolic tangent of a number, returning a value in
 * the range `[-∞, +∞]`.
 *
 * @param x The number whose inverse hyperbolic tangent is to be calculated
 * (must be between -1 and 1).
 * @returns The inverse hyperbolic tangent of the provided number.
 * @category Trigonometry
 */
export function atanh(x: number): number {
  if (isNaN(x) || x < -1 || x > 1) return NAN;
  if (x === -1 || x === 1) return x * POSITIVE_INFINITY;
  if (x === 0) return x;
  // Use log1p for better precision near 0 and to match native behavior.
  return 0.5 * log1p((2 * x) / (1 - x));
}
