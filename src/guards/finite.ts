/**
 * Checks if a number is finite, meaning it is not infinite or `NaN`.
 *
 * This is a dependency-free, type-safe implementation of the `Number.isFinite`
 * function. It is not dependent on the global `Number` object and will not be
 * affected by global variable shadowing, reassignment, or malicious tampering.
 *
 * @module guards/finite
 */
import { isNaN } from "./nan.ts";
import { isNegativeInfinity } from "./negative_infinity.ts";
import { isPositiveInfinity } from "./positive_infinity.ts";
import type { Finite } from "../types/finite.ts";

/**
 * Checks if a number is finite, meaning it is not infinite or `NaN`.
 *
 * This is a dependency-free, type-safe implementation of the `Number.isFinite`
 * function. It is not dependent on the global `Number` object and will not be
 * affected by global variable shadowing, reassignment, or malicious tampering.
 *
 * @param number The value to check.
 * @returns `true` if the value is finite, `false` otherwise.
 * @category Guards
 * @tags Finite
 */
export function isFinite<N extends number>(
  number: N,
): number is Finite<N>;

/**
 * Checks if a number is finite, meaning it is not infinite or `NaN`.
 *
 * @param number The value to check.
 * @returns `true` if the value is finite, `false` otherwise.
 */
export function isFinite(number: unknown): number is Finite;

/** @internal */
export function isFinite(number: unknown): number is Finite {
  return typeof number === "number" && !isNaN(number) &&
    !isPositiveInfinity(number) && !isNegativeInfinity(number);
}

export type { Finite };
