/**
 * This module provides branded nominal types for signed and unsigned integers
 * of various precisions, as well as bigints for 64-bit integers.
 *
 * @module types/integer
 */
import type { P32, Precision } from "./precision.ts";

const Integer: unique symbol = Symbol("Integer");
const Unsigned: unique symbol = Symbol("Unsigned");

interface IsInt<N extends Precision = P32> {
  readonly [Integer]: N;
}

interface IsUint<N extends Precision = P32> extends IsInt<N> {
  readonly [Unsigned]: true;
}

/**
 * Represents a signed/unsigned integer of a specific precision (default: 32).
 *
 * This type can be provided with a literal number for its first type argument,
 * which will be checked at compile-time to ensure it is a valid integer.
 *
 * There is currently no realistic solution for checking that the value is
 * within the range of the specified precision, so that part is left up to the
 * runtime. This type will, however, brand the number with a unique symbol for
 * the specified precision level `P`, preventing other numbers of different
 * precisions from being assigned to the same variable/parameter.
 *
 * If you need to allow multiple precisions or multiple numbers, simply provide
 * a union of the desired types to each of the type parameters.
 *
 * @category Types
 * @tags integer, nominal
 * @see {@linkcode Unsigned} for unsigned integers.
 */
export type Integer<N extends number = number, P extends Precision = P32> =
  number extends N ? number & IsInt<P>
    : `${N}` extends `${bigint}` ? N & IsInt<P>
    : never;

/**
 * Represents an unsigned integer of a specific precision (default: 32).
 *
 * This type can be provided with a literal number for its first type argument,
 * which will be checked at compile-time to ensure it is a positive integer.
 *
 * There is currently no realistic solution for checking that the value is
 * within the range of the specified precision, so that part is left up to the
 * runtime. This type will, however, brand the number with a unique symbol for
 * the specified precision level `P`, preventing other numbers of different
 * precisions from being assigned to the same variable/parameter.
 *
 * If you need to allow multiple precisions or multiple numbers, simply provide
 * a union of the desired types to each of the type parameters.
 *
 * @category Types
 * @tags integer, nominal, unsigned
 * @see {@linkcode Integer} for signed/unsigned integers.
 */
export type Unsigned<N extends number = number, P extends Precision = P32> =
  number extends N ? number & IsUint<P>
    : `${N}` extends `${bigint}` ? `${N}` extends `-${string}` ? never
      : N & IsUint<P>
    : never;

/**
 * Represents a signed/unsigned 8-bit integer. When given a number, this will
 * verify it is an integer and brand it with the `Int8` symbol.
 *
 * @see {@linkcode Integer} for more information about how nominal types work.
 * @category Types
 * @tags integer, nominal, int8
 */
export type Int8<N extends number = number> = N & IsInt<8>;

/**
 * Represents an unsigned 8-bit integer. When given a number, this will verify
 * it is an integer and brand it with the `Uint8` symbol.
 *
 * @see {@linkcode Unsigned} for more information about how nominal types work.
 * @category Types
 * @tags integer, nominal, unsigned, uint8
 */
export type Uint8<N extends number = number> = N & IsUint<8>;

/**
 * Represents a signed/unsigned 16-bit integer. When given a number, this will
 * verify it is an integer and brand it with the `Int16` symbol.
 *
 * @see {@linkcode Integer} for more information about how nominal types work.
 * @category Types
 * @tags integer, nominal, int16
 */
export type Int16<N extends number = number> = N & IsInt<16>;

/**
 * Represents an unsigned 16-bit integer. When given a number, this will verify
 * it is an integer and brand it with the `Uint16` symbol.
 *
 * @see {@linkcode Unsigned} for more information about how nominal types work.
 * @category Types
 * @tags integer, nominal, unsigned, uint16
 */
export type Uint16<N extends number = number> = N & IsUint<16>;

/**
 * Represents a signed/unsigned 32-bit integer. When given a number, this will
 * verify it is an integer and brand it with the `Int32` symbol.
 *
 * @see {@linkcode Integer} for more information about how nominal types work.
 * @category Types
 * @tags integer, nominal, int32
 */
export type Int32<N extends number = number> = N & IsInt<32>;

/**
 * Represents an unsigned 32-bit integer. When given a number, this will verify
 * it is an integer and brand it with the `Uint32` symbol.
 *
 * @see {@linkcode Unsigned} for more information about how nominal types work.
 * @category Types
 * @tags integer, nominal, unsigned, uint32
 */
export type Uint32<N extends number = number> = N & IsUint<32>;

/**
 * Represents a signed/unsigned 64-bit integer. When given a number, this will
 * verify it is an integer and brand it with the `Int64` symbol.
 *
 * @see {@linkcode Integer} for more information about how nominal types work.
 * @category Types
 * @tags integer, nominal, int64
 */
export type Int64<N extends number = number> = N & IsInt<64>;

/**
 * Represents an unsigned 64-bit integer. When given a number, this will verify
 * it is an integer and brand it with the `Uint64` symbol.
 *
 * @see {@linkcode Unsigned} for more information about how nominal types work.
 * @category Types
 * @tags integer, nominal, unsigned, uint64
 */
export type Uint64<N extends number = number> = N & IsUint<64>;

/**
 * Represents a signed/unsigned 64-bit bigint. This is like {@linkcode Int64},
 * but for bigints instead of numbers.
 *
 * @see {@linkcode Integer} for more information about how nominal types work.
 * @category Types
 * @tags integer, bigint, nominal
 */
export type BigInt64<I extends bigint = bigint> = I & IsInt<64>;

/**
 * Represents an unsigned 64-bit bigint. This is like {@linkcode Uint64}, but
 * for bigints instead of numbers.
 *
 * @see {@linkcode Unsigned} for more information about how nominal types work.
 * @category Types
 * @tags integer, bigint, nominal, unsigned
 */
export type BigUint64<I extends bigint = bigint> = I & IsUint<64>;
