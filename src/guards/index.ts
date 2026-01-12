/**
 * Type guards for checking various numeric conditions, ensuring a value is of
 * the expected type/value both at runtime and at compile-time.
 *
 * This module provides type-safe implementations for every native numeric
 * guard in the ECMAScript specification, including all top-level global guards
 * like [`isNaN`], and static `Number` methods like [`isFinite`].
 *
 * | Type Guard             | Description                                                   | Native Equivalent                       |
 * | ---------------------- | ------------------------------------------------------------- | --------------------------------------- |
 * | [`isNaN`]              | Checks if a value is `NaN` when coerced to a number.          | [`isNaN`][native-isnan]                 |
 * | [`isFinite`]           | Checks if a number is finite (i.e., not `±Infinity` or `NaN`) | [`isFinite`][native-isfinite]           |
 * | [`isInteger`]          | Checks if a value is an integer when coerced to a number.     | [`isInteger`][native-isinteger]         |
 * | [`isSafeInteger`]      | Checks if a number is a safe integer without coercion.        | [`Number.isSafeInteger`][issafeinteger] |
 * | [`isNumberInteger`]    | Checks if a number is an integer without coercion.            | [`Number.isInteger`][number-isint]      |
 * | [`isNumberNaN`]        | Checks if a number is `NaN` without coercion.                 | [`Number.isNaN`][native-number-isnan]   |
 * | [`isNegativeZero`]     | Checks if a number is `-0`.                                   | [`Object.is`][native-object-is]         |
 * | [`isPositiveZero`]     | Checks if a number is `+0` (and explicitly not `-0`).         | [`Object.is`][native-object-is]         |
 * | [`isInfinity`]         | Checks if a number is `+Infinity` or `-Infinity`.             | `--`                                    |
 * | [`isNegativeInfinity`] | Checks if a number is `-Infinity`.                            | `--`                                    |
 * | [`isPositiveInfinity`] | Checks if a number is `+Infinity`.                            | `--`                                    |
 *
 * [`isFinite`]: https://jsr.io/@nick/math/doc/guards/finite/~/isFinite
 * [`isInfinity`]: https://jsr.io/@nick/math/doc/guards/infinity/~/isInfinity
 * [`isInteger`]: https://jsr.io/@nick/math/doc/guards/integer/~/isInteger
 * [`isSafeInteger`]: https://jsr.io/@nick/math/doc/guards/safe-integer/~/isSafeInteger
 * [`isNumberInteger`]: https://jsr.io/@nick/math/doc/guards/integer/~/isNumberInteger
 * [`isNaN`]: https://jsr.io/@nick/math/doc/guards/nan/~/isNaN
 * [`isNumberNaN`]: https://jsr.io/@nick/math/doc/guards/nan/~/isNumberNaN
 * [`isPositiveInfinity`]: https://jsr.io/@nick/math/doc/guards/positive-infinity/~/isPositiveInfinity
 * [`isNegativeInfinity`]: https://jsr.io/@nick/math/doc/guards/negative-infinity/~/isNegativeInfinity
 * [`isPositiveZero`]: https://jsr.io/@nick/math/doc/guards/positive-zero/~/isPositiveZero
 * [`isNegativeZero`]: https://jsr.io/@nick/math/doc/guards/negative-zero/~/isNegativeZero
 * [native-isfinite]: https://mdn.io/isFinite
 * [native-isinteger]: https://mdn.io/isInteger
 * [issafeinteger]: https://mdn.io/Number.isSafeInteger
 * [number-isint]: https://mdn.io/Number.isInteger
 * [native-isnan]: https://mdn.io/isNaN
 * [native-number-isnan]: https://mdn.io/Number.isNaN
 * [native-object-is]: https://mdn.io/Object.is
 *
 * @module guards
 */
export * from "./finite.ts";
export * from "./infinity.ts";
export * from "./integer.ts";
export * from "./nan.ts";
export * from "./negative_zero.ts";
export * from "./positive_zero.ts";
export * from "./safe_integer.ts";
