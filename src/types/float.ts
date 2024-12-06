/**
 * This module provides nominal (branded) types for working with floating-point
 * numbers of various precisions, which can be used to enforce type safety and
 * prevent accidental mixing of floating-point values of different precisions.
 *
 * The types provided by this module are branded with unique symbols that are
 * specific to floating-point numbers, and are designed to be used as generic
 * type arguments to other functions and classes that work with floats.
 *
 * @module types/float
 */
import type { FloatPrecision, P32 } from "./precision.ts";

const Float: unique symbol = Symbol("Float");

interface IsFloat<N extends FloatPrecision> {
  readonly [Float]: N;
}

/**
 * Represents a floating-point number `N`, branded with the precision specified
 * by the generic type argument `P` (default: 32).
 *
 * This is a branded nominal type that accepts an optional generic type
 * argument. When passed a literal number, it will "brand" it with an
 * unforgeable unique symbol that is specific to floating points.
 *
 * @template {number} [N=number] The type of numeric value to check.
 * @template {FloatPrecision} [P=P32] Precision of the floating-point number.
 * @category Types
 * @tags Float, Branded
 */
export type Float<N extends number = number, P extends FloatPrecision = P32> =
  number extends N ? number & IsFloat<P>
    : `${N}` extends `${bigint}` ? N extends 0 ? N & IsFloat<P> : never
    : N & IsFloat<P>;

/**
 * Represents floating-point numbers of 16-bit precision.
 *
 * This is a branded nominal type that accepts an optional generic type
 * argument. When passed a literal number, it will "brand" it with an
 * unforgeable unique symbol that is specific to 16-bit floating points.
 *
 * @category Types
 * @tags Float, 16-bit, Branded
 */
export type Float16<N extends number = number> = Float<N, 16>;

/**
 * Represents floating-point numbers of 32-bit precision.
 *
 * This is a branded nominal type that accepts an optional generic type
 * argument. When passed a literal number, it will "brand" it with an
 * unforgeable unique symbol that is specific to 32-bit floating points.
 *
 * @category Types
 * @tags Float, 32-bit, Branded
 */
export type Float32<N extends number = number> = Float<N, 32>;

/**
 * Represents floating-point numbers of 64-bit precision.
 *
 * This is a branded nominal type that accepts an optional generic type
 * argument. When passed a literal number, it will "brand" it with an
 * unforgeable unique symbol that is specific to 64-bit floating points.
 *
 * @category Types
 * @tags Float, 64-bit, Branded
 */
export type Float64<N extends number = number> = Float<N, 64>;

export type { Float64 as Double };
