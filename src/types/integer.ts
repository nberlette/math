import type { P32, Precision } from "./precision.ts";

const Integer: unique symbol = Symbol("Integer");
const Unsigned: unique symbol = Symbol("Unsigned");

interface IsInt<N extends Precision = P32> {
  readonly [Integer]: N;
}

interface IsUint<N extends Precision = P32> extends IsInt<N> {
  readonly [Unsigned]: true;
}

export type Integer<N extends number = number, P extends Precision = P32> =
  number extends N ? number & IsInt<P>
    : `${N}` extends `${bigint}` ? N & IsInt<P>
    : never;

export type Unsigned<N extends number = number, P extends Precision = P32> =
  number extends N ? number & IsUint<P>
    : `${N}` extends `${bigint}` ? `${N}` extends `-${string}` ? never
      : N & IsUint<P>
    : never;

export type Int8<N extends number = number> = N & IsInt<8>;
export type Uint8<N extends number = number> = N & IsUint<8>;

export type Int16<N extends number = number> = N & IsInt<16>;
export type Uint16<N extends number = number> = N & IsUint<16>;

export type Int32<N extends number = number> = N & IsInt<32>;
export type Uint32<N extends number = number> = N & IsUint<32>;

export type Int64<N extends number = number> = N & IsInt<64>;
export type Uint64<N extends number = number> = N & IsUint<64>;

export type BigInt64<I extends bigint = bigint> = I & IsInt<64>;
export type BigUint64<I extends bigint = bigint> = I & IsUint<64>;
