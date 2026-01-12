/**
 * # `@nick/math`
 *
 * Standalone implementations of every native API in the `Math` namespace,
 * written in pure TypeScript with zero external dependencies. Distributed as a
 * collection of tree-shakeable submodules so you can pick and choose exactly
 * what features to include based on your specific use case's requirements.
 *
 * @example
 * ```ts
 * import math from "@nick/math";
 * import assert from "node:assert";
 *
 * // all the same constants from globalThis.Math
 * assert.strictEqual(math.PI, Math.PI);
 * assert.strictEqual(math.E, Math.E);
 * assert.strictEqual(math.SQRT1_2, Math.SQRT1_2);
 * assert.strictEqual(math.LOG10E, Math.LOG10E);
 *
 * // ...and even those from globalThis.Number
 * assert.strictEqual(math.EPSILON, Number.EPSILON);
 * assert.strictEqual(math.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);
 * assert.notStrictEqual(math.NaN, Number.NaN); // NaN !== NaN (like, ever)
 * // ...
 * assert.strictEqual(math.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
 *
 * // all the functions from globalThis.Math
 * assert.strictEqual(math.abs(-math.PI), math.PI);
 * assert.strictEqual(math.f16round(math.PI), Math.f16round(Math.PI));
 * // ...
 * assert.strictEqual(math.cos(0.99999999999999), Math.cos(0.99999999999999));
 *
 * // additional, non-standard guards
 * assert.ok(math.isNegativeInfinity(-1 / 0));
 * assert.ok(math.isNegativeZero(-0));
 * assert.ok(math.isPositiveZero(0));
 * // ...
 * assert.ok(math.isFinite(420));
 * ```
 * @module math
 */
export * from "./abs.ts";
export * from "./acos.ts";
export * from "./acosh.ts";
export * from "./asin.ts";
export * from "./asinh.ts";
export * from "./atan.ts";
export * from "./atanh.ts";
export * from "./atan2.ts";
export * from "./cbrt.ts";
export * from "./ceil.ts";
export * from "./clamp.ts";
export * from "./clz32.ts";
export * from "./constants/index.ts";
export * from "./cos.ts";
export * from "./cosh.ts";
export * from "./exp.ts";
export * from "./expm1.ts";
export * from "./floor.ts";
export * from "./f16round.ts";
export * from "./fround.ts";
export * from "./guards/index.ts";
export * from "./hypot.ts";
export * from "./ieee754.ts";
export * from "./imul.ts";
export * from "./log.ts";
export * from "./log1p.ts";
export * from "./log2.ts";
export * from "./log10.ts";
export * from "./max.ts";
export * from "./min.ts";
export * from "./pow.ts";
export * from "./random.ts";
export * from "./round.ts";
export * from "./sign.ts";
export * from "./sin.ts";
export * from "./sinh.ts";
export * from "./sqrt.ts";
export * from "./tan.ts";
export * from "./tanh.ts";
export * from "./trunc.ts";
export * from "./types/index.ts";

export * as default from "./index.ts";
