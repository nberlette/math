/**
 * Re-exports the infinity guards for checking positive and negative
 * infinite values.
 *
 * @example
 * ```ts
 * import { isNegativeInfinity, isPositiveInfinity } from "@nick/math/guards/infinity";
 * import assert from "node:assert";
 *
 * assert.ok(isPositiveInfinity(1 / 0));
 * assert.ok(isNegativeInfinity(-1 / 0));
 * ```
 * @category Guards
 * @module guards/infinity
 */

export * from "./negative_infinity.ts";
export * from "./positive_infinity.ts";
