# `@nick/math`

#### Dependency-free implementation of the `Math.*` namespace

---

## Overview

This package provides zero-dependency standalone implementations for all of the
[functions] and [constants] found in the native [`Math`] namespace, _most_ of
those found on the global `Number` constructor function, with some additional
non-standard helpers, constants, and guards for various other purposes.

## Usage

Written in pure TypeScript with absolutely zero dependencies. Organized in a
modular structure to facilitate bundler tree-shaking (dead code elimination),
you can either import the entire package as a namespace (useful for rapid
prototyping during development), or on a modular basis where only the features
required are imported (recommended for production).

When imported as a namespace (or via the default export), this package is suitable
to use as a drop-in replacement for any standard `Math.*` feature's usage[^1].

[^1]: All modules in this package are implemented using 100% manual logic and
    arithmetic, and do not rely on any native code or objects. As such, the
    performance will typically be slightly slower than the native `Math.*`
    implementations. There may also be some minor deviations in output. If you
    believe a specific function is inaccurate or otherwise inconsistent with the
    expected behavior, please open an issue so I can address it and attempt to
    improve it. Thank you!

### Install

This package is published to [JSR] as `@nick/math`, and to [NPM] and [GPR] as
`@nberlette/math`, for maximum availability on all major package managers:

```sh
deno add jsr:@nick/math
```

```sh
pnpm add jsr:@nick/math
```

```sh
yarn add jsr:@nick/math
```

```sh
vlt add jsr:@nick/math
```

```sh
bunx jsr add @nick/math
```

```sh
npx jsr add @nick/math
```

#### NPM and GPR

```sh
deno add npm:@nberlette/math
```

```sh
pnpm add @nberlette/math
```

```sh
yarn add @nberlette/math
```

```sh
vlt add @nberlette/math
```

```sh
bun add @nberlette/math
```

```sh
npm i @nberlette/math
```

### Example Usage

#### Namespace

```ts
import * as math from "@nick/math";
import assert from "node:assert";


assert.ok((math.acos(0.5) - Math.acos(0.5)) < 1e-9);
assert.strictEqual(math.NEGATIVE_ZERO, -0);
assert.strictEqual(math.PI, 3.141592653589793 /* Math.PI */);
```

#### Modular

```ts
import { PI } from "@nick/math/pi";
import { f16round } from "@nick/math/f16round";
import { sign } from "@nick/math/sign";
import { NEGATIVE_INFINITY } from "@nick/math/constants/negative-infinity";
import assert from "node:assert";

assert.strictEqual(f16round(PI), 3.140625);
assert.strictEqual(sign(-0), -0);
assert.strictEqual(sign(PI), 1);
assert.strictEqual(sign(NEGATIVE_INFINITY), -1);
```

---

## API

<details><summary><b><u>Table of Contents</u></b></summary><br>

- [Constants](#constants)
  - [`E` (Euler's number)](#e-eulers-number)
  - [`LN10` (Natural logarithm of 10)](#ln10-natural-logarithm-of-10)
  - [`LN2` (Natural logarithm of 2)](#ln2-natural-logarithm-of-2)
  - [`LOG2E` (Base 2 logarithm of E)](#log2e-base-2-logarithm-of-e)
  - [`LOG10E` (Base 10 logarithm of E)](#log10e-base-10-logarithm-of-e)
  - [`PI` (π)](#pi-π)
  - [`SQRT1_2` (Square root of 1/2)](#sqrt1_2-square-root-of-12)
  - [`SQRT2` (Square root of 2)](#sqrt2-square-root-of-2)
  - [`EPSILON`](#epsilon)
  - [`MAX_SAFE_INTEGER`](#max_safe_integer)
  - [`MIN_SAFE_INTEGER`](#min_safe_integer)
  - [`MAX_VALUE`](#max_value)
  - [`MIN_VALUE`](#min_value)
  - [`NEGATIVE_INFINITY`](#negative_infinity)
  - [`POSITIVE_INFINITY`](#positive_infinity)
  - [`NAN`](#nan)
- [Functions](#functions)
  - [`abs`](#abs)
  - [`acos`](#acos)
  - [`acosh`](#acosh)
  - [`asin`](#asin)
  - [`asinh`](#asinh)
  - [`atan`](#atan)
  - [`atan2`](#atan2)
  - [`atanh`](#atanh)
  - [`cbrt`](#cbrt)
  - [`ceil`](#ceil)
  - [`clz32`](#clz32)
  - [`cos`](#cos)
  - [`cosh`](#cosh)
  - [`exp`](#exp)
  - [`expm1`](#expm1)
  - [`floor`](#floor)
  - [`fround`](#fround)
  - [`f16round`](#f16round)
  - [`hypot`](#hypot)
  - [`imul`](#imul)
  - [`log`](#log)
  - [`log1p`](#log1p)
  - [`log10`](#log10)
  - [`log2`](#log2)
  - [`max`](#max)
  - [`min`](#min)
  - [`pow`](#pow)
  - [`random`](#random)
  - [`round`](#round)
  - [`sign`](#sign)
  - [`sin`](#sin)
  - [`sinh`](#sinh)
  - [`sqrt`](#sqrt)
  - [`tan`](#tan)
  - [`tanh`](#tanh)
  - [`trunc`](#trunc)
- [Guards](#guards)
  - [`isFinite`](#isfinite)
  - [`isInteger`](#isinteger)
  - [`isNaN`](#isnan)
  - [`isSafeInteger`](#issafeinteger)
  - [`isNegativeZero`](#isnegativezero)
  - [`isPositiveInfinity`](#ispositiveinfinity)
  - [`isNegativeInfinity`](#isnegativeinfinity)

</details>

---

### Constants

#### `E` (Euler's number)

```ts
import { E } from "@nick/math/constants/e";
import assert from "node:assert";

assert.strictEqual(E, 2.718281828459045);
```

#### `LN10` (Natural logarithm of 10)

```ts
import { LN10 } from "@nick/math/constants/ln10";
import assert from "node:assert";

assert.strictEqual(LN10, 2.302585092994046);
```

#### `LN2` (Natural logarithm of 2)

```ts
import { LN2 } from "@nick/math/constants/ln2";
import assert from "node:assert";

assert.strictEqual(LN2, 0.6931471805599453);
```

#### `LOG2E` (Base 2 logarithm of E)

```ts
import { LOG2E } from "@nick/math/constants/log2e";
import assert from "node:assert";

assert.strictEqual(LOG2E, 1.4426950408889634);
```

#### `LOG10E` (Base 10 logarithm of E)

```ts
import { LOG10E } from "@nick/math/constants/log10e";
import assert from "node:assert";

assert.strictEqual(LOG10E, 0.4342944819032518);
```

#### `PI` (π)

```ts
import { PI } from "@nick/math/constants/pi";
import assert from "node:assert";

assert.strictEqual(PI, 3.141592653589793);
```

#### `SQRT1_2` (Square root of 1/2)

```ts
import { SQRT1_2 } from "@nick/math/constants/sqrt1_2";
import assert from "node:assert";

assert.strictEqual(SQRT1_2, 0.7071067811865476);
```

#### `SQRT2` (Square root of 2)

```ts
import { SQRT2 } from "@nick/math/constants/sqrt2";
import assert from "node:assert";

assert.strictEqual(SQRT2, 1.4142135623730951);
```

#### `EPSILON`

Represents the smallest positive number that can be added to `1` to get a result
different from `1`.

```ts
import { EPSILON } from "@nick/math/constants/epsilon";
import assert from "node:assert";

assert.strictEqual(EPSILON, 2.220446049250313e-16);
```

#### `MAX_SAFE_INTEGER`

The maximum safe integer in JavaScript, `2^53 - 1`.

```ts
import { MAX_SAFE_INTEGER } from "@nick/math/constants/max-safe-integer";
import assert from "node:assert";

assert.strictEqual(MAX_SAFE_INTEGER, 9007199254740991);
```

#### `MIN_SAFE_INTEGER`

The minimum safe integer in JavaScript, `-2^53 + 1`.

```ts
import { MIN_SAFE_INTEGER } from "@nick/math/constants/min-safe-integer";
import assert from "node:assert";

assert.strictEqual(MIN_SAFE_INTEGER, -9007199254740991);
```

#### `MAX_VALUE`

The maximum representable value in JavaScript.

```ts
import { MAX_VALUE } from "@nick/math/constants/max-value";
import assert from "node:assert";

assert.strictEqual(MAX_VALUE, 1.7976931348623157e308);
```

#### `MIN_VALUE`

The minimum representable value in JavaScript.

```ts
import { MIN_VALUE } from "@nick/math/constants/min-value";
import assert from "node:assert";

assert.strictEqual(MIN_VALUE, 5e-324);
```

#### `NEGATIVE_INFINITY`

The negative infinity value in JavaScript.

```ts
import { NEGATIVE_INFINITY } from "@nick/math/constants/negative-infinity";
import assert from "node:assert";

assert.strictEqual(NEGATIVE_INFINITY, -Infinity);
```

#### `POSITIVE_INFINITY`

The positive infinity value in JavaScript.

```ts
import { POSITIVE_INFINITY } from "@nick/math/constants/positive-infinity";
import assert from "node:assert";

assert.strictEqual(POSITIVE_INFINITY, Infinity);
```

#### `NAN`

The `NaN` value in JavaScript, representing "Not a Number".

```ts
import { NAN } from "@nick/math/constants/nan";
import assert from "node:assert";

assert.ok(NAN !== NAN);
```

###### Alias: `NaN`

```ts
import { NaN } from "@nick/math/constants/nan";
import assert from "node:assert";

assert.ok(NaN !== NaN);
```

---

### Functions

#### `abs`

Returns the absolute value of a number.

```ts
import { abs } from "@nick/math/abs";
import assert from "node:assert";

assert.strictEqual(abs(-1), 1);
```

#### `acos`

Returns the arccosine of a number.

```ts
import { acos } from "@nick/math/acos";
import assert from "node:assert";

assert.ok(Math.abs(acos(0.5) - 1.0471975511965979) < 1e-9);
```

#### `acosh`

Returns the inverse hyperbolic cosine of a number.

```ts
import { acosh } from "@nick/math/acosh";
import assert from "node:assert";

assert.strictEqual(acosh(1), 0);
```

#### `asin`

Returns the arcsine of a number.

```ts
import { asin } from "@nick/math/asin";
import assert from "node:assert";

assert.ok(Math.abs(asin(0.5) - 0.5235987755982989) < 1e-9);
```

#### `asinh`

Returns the inverse hyperbolic sine of a number.

```ts
import { asinh } from "@nick/math/asinh";
import assert from "node:assert";

assert.ok(Math.abs(asinh(0.5) - 0.48121182505960347) < 1e-9);
```

#### `atan`

Returns the arctangent of a number.

```ts
import { atan } from "@nick/math/atan";
import assert from "node:assert";

assert.ok(Math.abs(atan(0.5) - 0.4636476090008061) < 1e-9);
```

#### `atan2`

Returns the arctangent of the quotient of its arguments.

```ts
import { atan2 } from "@nick/math/atan2";
import assert from "node:assert";

assert.strictEqual(atan2(1, 1), 0.7853981633974483);
```

#### `atanh`

Returns the inverse hyperbolic tangent of a number.

```ts
import { atanh } from "@nick/math/atanh";
import assert from "node:assert";

assert.strictEqual(atanh(0.5), 0.5493061443340549);
```

#### `cbrt`

Returns the cube root of a number.

```ts
import { cbrt } from "@nick/math/cbrt";
import assert from "node:assert";

assert.strictEqual(cbrt(27), 3);
```

#### `ceil`

Returns the smallest integer greater than or equal to a number.

```ts
import { ceil } from "@nick/math/ceil";
import assert from "node:assert";

assert.strictEqual(ceil(1.5), 2);
```

#### `clz32`

Returns the number of leading zero bits in the 32-bit binary representation of a
number.

```ts
import { clz32 } from "@nick/math/clz32";
import assert from "node:assert";

assert.strictEqual(clz32(1), 31);
```

#### `cos`

Returns the cosine of a number.

```ts
import { cos } from "@nick/math/cos";
import assert from "node:assert";

assert.ok(Math.abs(cos(0.5) - 0.8775825618903728) < 1e-9);
```

#### `cosh`

Returns the hyperbolic cosine of a number.

```ts
import { cosh } from "@nick/math/cosh";
import assert from "node:assert";

assert.ok(Math.abs(cosh(0.5) - 1.1276259652063807) < 1e-9);
```

#### `exp`

Returns `E` raised to the power of a number.

```ts
import { exp } from "@nick/math/exp";
import assert from "node:assert";

assert.ok(Math.abs(exp(1) - 2.718281828459045) < 1e-9);
```

#### `expm1`

Returns `E` raised to the power of a number, minus `1`.

```ts
import { expm1 } from "@nick/math/expm1";
import assert from "node:assert";

assert.ok(Math.abs(expm1(1) - 1.718281828459045) < 1e-9);
```

#### `floor`

Returns the largest integer less than or equal to a number.

```ts
import { floor } from "@nick/math/floor";
import assert from "node:assert";

assert.strictEqual(floor(1.5), 1);
```

#### `fround`

Returns the nearest single precision float representation of a number.

```ts
import { fround } from "@nick/math/fround";
import { PI } from "@nick/math/constants/pi";

console.log(PI, "->", fround(PI));
// 3.141592653589793 -> 3.1415927410125732
```

#### `f16round`

Returns the nearest 16-bit float representation of a number, as per the IEEE 754
standard. Introduced by the [TC39 Proposal for Float16Array].

[TC39 Proposal for Float16Array]: https://github.com/tc39/proposal-Float16Array

```ts
import { f16round } from "@nick/math/f16round";
import { PI } from "@nick/math/constants/pi";
import assert from "node:assert";

assert.strictEqual(f16round(PI), 3.140625);
```

#### `hypot`

Returns the square root of the sum of the squares of its arguments.

```ts
import { hypot } from "@nick/math/hypot";
import assert from "node:assert";

assert.strictEqual(hypot(3, 4), 5);
```

#### `imul`

Returns the result of a 32-bit integer multiplication.

```ts
import { imul } from "@nick/math/imul";
import assert from "node:assert";

assert.strictEqual(imul(2, 3), 6);
```

#### `log`

Returns the natural logarithm of a number.

```ts
import { log } from "@nick/math/log";
import assert from "node:assert";

assert.ok(Math.abs(log(9) - 2.1972245773362196) < 1e-9);
```

#### `log1p`

Returns the natural logarithm of `1` plus a number.

```ts
import { log1p } from "@nick/math/log1p";
import assert from "node:assert";

assert.ok(Math.abs(log1p(9) - 2.302585092994046) < 1e-9);
```

#### `log10`

Returns the base 10 logarithm of a number.

```ts
import { log10 } from "@nick/math/log10";
import assert from "node:assert";

assert.ok(Math.abs(log10(100) - 2) < 1e-9);
```

#### `log2`

Returns the base 2 logarithm of a number.

```ts
import { log2 } from "@nick/math/log2";
import assert from "node:assert";

assert.ok(Math.abs(log2(8) - 3) < 1e-9);
```

#### `max`

Returns the largest of zero or more numbers.

```ts
import { max } from "@nick/math/max";
import assert from "node:assert";

assert.strictEqual(max(1, 2, 3), 3);
```

#### `min`

Returns the smallest of zero or more numbers.

```ts
import { min } from "@nick/math/min";
import assert from "node:assert";

assert.strictEqual(min(1, 2, 3), 1);
```

#### `pow`

Returns the base to the exponent power.

```ts
import { pow } from "@nick/math/pow";
import assert from "node:assert";

assert.strictEqual(pow(2, 3), 8);
```

#### `random`

Returns a pseudo-random number between `0` and `1`.

```ts
import { random } from "@nick/math/random";
import assert from "node:assert";

const value = random();

assert.ok(value >= 0 && value < 1);
```

#### `round`

Returns the value of a number rounded to the nearest integer.

```ts
import { round } from "@nick/math/round";
import assert from "node:assert";

assert.strictEqual(round(1.5), 2);
```

#### `sign`

Returns the sign of a number, indicating whether it is positive, negative, or
zero.

```ts
import { sign } from "@nick/math/sign";
import assert from "node:assert";

assert.strictEqual(sign(-1), -1);
```

#### `sin`

Returns the sine of a number.

```ts
import { sin } from "@nick/math/sin";
import assert from "node:assert";

assert.ok(Math.abs(sin(0.5) - 0.479425538604203) < 1e-9);
```

#### `sinh`

Returns the hyperbolic sine of a number.

```ts
import { sinh } from "@nick/math/sinh";
import assert from "node:assert";

assert.ok(Math.abs(sinh(0.5) - 0.5210953054937474) < 1e-9);
```

#### `sqrt`

Returns the square root of a number.

```ts
import { sqrt } from "@nick/math/sqrt";
import assert from "node:assert";

assert.strictEqual(sqrt(9), 3);
```

#### `tan`

Returns the tangent of a number.

```ts
import { tan } from "@nick/math/tan";
import assert from "node:assert";

assert.ok(Math.abs(tan(0.5) - 0.5463024898437905) < 1e-9);
```

#### `tanh`

Returns the hyperbolic tangent of a number.

```ts
import { tanh } from "@nick/math/tanh";
import assert from "node:assert";

assert.ok(Math.abs(tanh(0.5) - 0.46211715726000974) < 1e-9);
```

#### `trunc`

Returns the integer part of a number by removing any fractional digits.

```ts
import { trunc } from "@nick/math/trunc";
import assert from "node:assert";

assert.strictEqual(trunc(1.5), 1);
```

---

### Guards

#### `isFinite`

Determines whether a number is finite.

```ts
import { isFinite } from "@nick/math/is/finite";
import assert from "node:assert";

assert.ok(isFinite(1));
```

#### `isInteger`

Determines whether a number is an integer.

```ts
import { isInteger } from "@nick/math/is/integer";
import assert from "node:assert";

assert.ok(isInteger(1));
```

#### `isNaN`

Determines whether a value is `NaN`.

```ts
import { isNaN } from "@nick/math/is/nan";
import assert from "node:assert";

assert.ok(isNaN(NaN));
```

#### `isSafeInteger`

Determines whether a number is a safe integer.

```ts
import { isSafeInteger } from "@nick/math/is/safe-integer";
import assert from "node:assert";

assert.ok(isSafeInteger(1));
```

#### `isNegativeZero`

Determines whether a number is `-0`.

```ts
import { isNegativeZero } from "@nick/math/is/negative-zero";
import assert from "node:assert";

assert.ok(isNegativeZero(-0));
assert.ok(!isNegativeZero(0));
```

#### `isPositiveInfinity`

Determines whether a number is positive infinity.

```ts
import { isPositiveInfinity } from "@nick/math/is/positive-infinity";
import assert from "node:assert";

assert.ok(isPositiveInfinity(Infinity));
```

#### `isNegativeInfinity`

Determines whether a number is negative infinity.

```ts
import { isNegativeInfinity } from "@nick/math/is/negative-infinity";
import assert from "node:assert";

assert.ok(isNegativeInfinity(-Infinity));
```

---

<div align="center">

**[MIT] © [Nicholas Berlette]. All rights reserved.**

<small>

[github] · [issues] · [jsr] · [npm] · [contributing]

</small></div>

[MIT]: https://nick.mit-license.org "MIT © Nicholas Berlette. All rights reserved."
[Nicholas Berlette]: https://github.com/nberlette "Follow nberlette on GitHub for more cool stuff!"
[GitHub]: https://github.com/nberlette/math "Give nberlette/math a star on GitHub! ⭐️"
[Issues]: https://github.com/nberlette/math/issues "Found a bug? Let's squash it! 🐛"
[JSR]: https://jsr.io/@nick/math "View the @nick/math package on JSR"
[docs]: https://jsr.io/@nick/math/doc "View auto-generated API documentation for @nick/math on JSR"
[NPM]: https://npmjs.com/package/@nberlette/math "View @nberlette/math on NPM"
[contributing]: https://github.com/nberlette/math/blob/main/.github/CONTRIBUTING.md "Contribution guidelines"
[`Math`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
