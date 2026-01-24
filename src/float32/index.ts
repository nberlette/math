/**
 * Utilities for working with `float32` values (32-bit single precision
 * floating point numbers), as defined by IEEE 754-2008.
 *
 * @example
 * ```ts
 * import { decodeFloat32, encodeFloat32 } from "@nick/math/float32";
 * import assert from "node:assert";
 *
 * const encoded = encodeFloat32(1);
 * assert.strictEqual(decodeFloat32(encoded), 1);
 * ```
 * @category IEEE-754
 * @module float32
 */
export * from "./decode.ts";
export * from "./encode.ts";
export * from "./guards.ts";
export * from "./round.ts";
