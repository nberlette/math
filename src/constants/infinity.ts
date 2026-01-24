/**
 * Re-exports the positive and negative infinity constants and their
 * matching type aliases from the constants submodules.
 *
 * @example
 * ```ts
 * import { NEGATIVE_INFINITY, POSITIVE_INFINITY } from "@nick/math/constants/infinity";
 * import assert from "node:assert";
 *
 * assert.strictEqual(POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
 * assert.strictEqual(NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);
 * ```
 * @category Constants
 * @module constants/infinity
 */

export * from "./positive_infinity.ts";
export * from "./negative_infinity.ts";
