/**
 * Type guards for checking various numeric conditions, ensuring a value is of
 * the expected type/value both at runtime and at compile-time.
 *
 * This module provides a type-safe implementation for every native numeric
 * guard from the ECMAScript specification, which includes the top-level
 * global functions like `isNaN`, and static `Number` methods like `isFinite`.
 *
 * | Type Guard             | Description                                                   | Native Equivalent                       |
 * | ---------------------- | ------------------------------------------------------------- | --------------------------------------- |
 * | [`isFinite`]           | Checks if a number is finite (i.e., not `Infinity` or `NaN`). | [`isFinite`][native-isfinite]           |
 * | [`isInfinity`]         | Checks if a number is `Infinity` or `-Infinity`.              | `--`                                    |
 * | [`isInteger`]          | Checks if a number is an integer (whole number).              | [`Number.isInteger`][native-isinteger]  |
 * | [`isNaN`]              | Checks if a value is `NaN` when coerced to a number.          | [`isNaN`][native-isnan]                 |
 * | [`isNumberNaN`]        | Checks if a value is `NaN` without coercion.                  | [`Number.isNaN`][native-number-isnan]   |
 * | [`isNegativeInfinity`] | Checks if a number is `-Infinity`.                            | `--`                                    |
 * | [`isNegativeZero`]     | Checks if a number is `-0`.                                   | [`Object.is`][native-object-is]*        |
 * | [`isPositiveInfinity`] | Checks if a number is `+Infinity`.                            | `--`                                    |
 * | [`isPositiveZero`]     | Checks if a number is `+0` (and not `-0`).                    | `--`                                    |
 *
 * @module guards
 */
export * from "./finite.ts";
export * from "./infinity.ts";
export * from "./integer.ts";
export * from "./nan.ts";
export * from "./negative_zero.ts";
export * from "./positive_zero.ts";
