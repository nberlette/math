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
 *
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
