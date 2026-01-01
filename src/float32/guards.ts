/**
 * This submodule provides type guards specific to the float32 module of the
 * `@nick/math` library, namely the {@linkcode isFloat32} predicate function.
 *
 * @module float32/guards
 */
import { isNaN } from "../guards/nan.ts";
import { type Finite, isFinite } from "../guards/finite.ts";
import type { Float32 } from "../types/float.ts";
import { roundFloat32 } from "./round.ts";

/**
 * Checks if a value is a valid {@linkcode Float32} as per IEEE 754-2008.
 *
 * @param it The value to check.
 * @returns `true` if the value is a {@linkcode Float32}; otherwise, false.
 * @see https://en.wikipedia.org/wiki/Single-precision_floating-point_format
 * @see https://en.wikipedia.org/wiki/IEEE_754
 * @example
 * ```ts
 * import { isFloat32 } from "@nick/math/float32/guards";
 *
 * console.log(isFloat32(0.5)); // true
 * console.log(isFloat32(0.1)); // false
 * ```
 * @see {@linkcode isFloat16} for a similar function for float16 numbers.
 * @category Guards
 * @tags float32
 */
export function isFloat32<N extends number>(it: N): it is Float32<N>;
export function isFloat32(it: unknown): it is Float32<number>;
export function isFloat32(it: unknown): it is Float32 {
  return typeof it === "number" && !isNaN(it) && it === roundFloat32(it);
}

/**
 * Checks if the given value is a finite float32 number, as per the IEEE
 * 754-2008 spec. This is a stricter version of {@linkcode isFloat32} that also
 * checks if the value is finite, i.e. neither `Infinity`, `-Infinity`, nor
 * `NaN`.
 *
 * @param value The value to check.
 * @returns `true` if the value is a finite float32 number, `false` otherwise.
 * @see {@linkcode isFloat32} for a less strict version of this function.
 * @category Guards
 * @tags float32
 */
export function isFiniteFloat32<N extends number>(
  it: N,
): it is Finite<N> & Float32<N>;
export function isFiniteFloat32(it: unknown): it is Float32<number>;
export function isFiniteFloat32(it: unknown): it is Float32 {
  return isFloat32(it) && isFinite(it);
}
