/**
 * Calculates the base-2 logarithm of a number (log₂).
 *
 * @example
 * ```ts
 * import { log2 } from "@nick/math/log2";
 * import assert from "node:assert";
 *
 * assert.strictEqual(log2(1), 0);
 * ```
 * @module log2
 */
import { LOG2E } from "./constants/log2e.ts";
import { log } from "./log.ts";

/**
 * Calculates the base-2 logarithm of a number (log₂).
 *
 * @param x The number to calculate the base-2 logarithm of (log₂)
 * @returns The base-2 logarithm of the provided number.
 * @category Logarithmic
 * @see {@linkcode log} for the natural logarithm.
 * @see {@linkcode log10} for the base-10 logarithm.
 * @see {@linkcode LOG2E} for the base-2 logarithm of {@linkcode E}.
 */
export function log2(x: number): number {
  return log(x) * LOG2E;
}
