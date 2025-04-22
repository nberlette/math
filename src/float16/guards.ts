/**
 * This submodule provides type guards specific to the float16 module of the
 * `@nick/math` library, namely the {@linkcode isFloat16} predicate function.
 *
 * @module float16/guards
 */
import { isNaN } from "../guards/nan.ts";
import type { Float16 } from "../types/float.ts";
import { roundFloat16 } from "./round.ts";

/**
 * Checks if a value is a valid {@linkcode Float16} as per IEEE 754-2008.
 *
 * @param it The value to check.
 * @returns `true` if the value is a float16 number, `false` otherwise.
 * @see https://en.wikipedia.org/wiki/Half-precision_floating-point_format
 * @see https://en.wikipedia.org/wiki/IEEE_754
 * @example
 * ```ts
 * import { isFloat16 } from "@nick/math/float16/guards";
 *
 * console.log(isFloat16(0.5)); // true
 * console.log(isFloat16(0.1)); // false
 * ```
 * @see {@linkcode isFloat32} for a similar function for float32 numbers.
 * @category Guards
 * @tags float16
 */
export function isFloat16<N extends number>(it: N): it is Float16<N>;
export function isFloat16(it: unknown): it is Float16<number>;
export function isFloat16(it: unknown): it is Float16 {
  return typeof it === "number" && !isNaN(it) && it === roundFloat16(it);
}
