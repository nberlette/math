/**
 * Utilities for working with `float16` values (16-bit half precision floating
 * point numbers), as defined by IEEE 754-2008.
 *
 * @example
 * ```ts
 * import { decodeFloat16, encodeFloat16 } from "@nick/math/float16";
 * import assert from "node:assert";
 *
 * const encoded = encodeFloat16(1);
 * assert.strictEqual(decodeFloat16(encoded), 1);
 * ```
 * @category IEEE-754
 * @module float16
 */
export * from "./decode.ts";
export * from "./encode.ts";
export * from "./guards.ts";
export * from "./round.ts";
