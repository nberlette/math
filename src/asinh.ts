/**
 * Calculates the inverse hyperbolic sine of a number.
 *
 * @example
 * ```ts
 * import { asinh } from "@nick/math/asinh";
 * import assert from "node:assert";
 *
 * assert.strictEqual(asinh(0), 0);
 * ```
 * @module asinh
 */
import { isFinite } from "./guards/finite.ts";
import { log } from "./log.ts";
import { sqrt } from "./sqrt.ts";

/**
 * Calculates the inverse hyperbolic sine of a number.
 *
 * @param x The number whose inverse hyperbolic sine is to be calculated.
 * @returns The inverse hyperbolic sine of the provided number.
 * @category Trigonometry
 */
export function asinh(x: number): number {
  if (x === 0) return x;
  if (!isFinite(x)) return x;
  return log(x + sqrt(x * x + 1));
}
