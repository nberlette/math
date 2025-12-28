<div align="center">

# `@nick/math`

#### Dependency-free implementation of the `Math.*` namespace

</div>

---

## Overview

Standalone implementations of the **entire** native [`Math`] namespace, written
in pure TypeScript with absolutely zero dependencies. Organized in a modular
structure to encourage tree-shaking (dead code elimination) in bundlers, this
package can be imported eithr on an individual module basis, or as a namespace
suitable for use as a drop-in replacement for the standard `Math` object[^1].

[^1]: All modules in this package are implemented using 100% manual logic and
    arithmetic, and do not rely on any native code or objects. As such, the
    performance will typically be slightly slower than the native `Math.*`
    implementations. There may also be some minor deviations in output. If you
    believe a specific function is inaccurate or otherwise inconsistent with the
    expected behavior, please open an issue so I can address it and attempt to
    improve it. Thank you!

## Install

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
bunx jsr add @nick/math
```

```sh
npx jsr add @nick/math
```

---

## Usage

```ts
import * as math from "@nick/math";

console.assert(math.abs(-1) === 1);
console.assert(math.acos(0.5) === 1.0471975511965979);
console.assert(math.acosh(1) === 0);
console.assert(math.log(9) === 2.1972245773362196);
console.assert(math.PI === 3.141592653589793);
```

```ts
import { abs } from "@nick/math/abs";

import { fround } from "@nick/math/fround";

import { log } from "@nick/math/log";
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

console.assert(E === 2.718281828459045);
```

##### Type-Level Usage

```ts
import { E } from "@nick/math/constants/e";

function assertEulersNumber(e: number): asserts e is E {
  if (e !== E) throw new TypeError(`Expected ${E}, got ${e}`);
}
```

#### `LN10` (Natural logarithm of 10)

```ts
import { LN10 } from "@nick/math/constants/ln10";

console.assert(LN10 === 2.302585092994046);
```

##### Type-Level Usage

```ts
import { LN10 } from "@nick/math/constants/ln10";

function assertNaturalLogarithmOf10(ln10: number): asserts ln10 is LN10 {
  if (ln10 !== LN10) throw new TypeError(`Expected ${LN10}, got ${ln10}`);
}
```

#### `LN2` (Natural logarithm of 2)

```ts
import { LN2 } from "@nick/math/constants/ln2";

console.assert(LN2 === 0.6931471805599453);
```

##### Type-Level Usage

```ts
import { LN2 } from "@nick/math/constants/ln2";

function assertNaturalLogarithmOf2(ln2: number): asserts ln2 is LN2 {
  if (ln2 !== LN2) throw new TypeError(`Expected ${LN2}, got ${ln2}`);
}
```

#### `LOG2E` (Base 2 logarithm of E)

```ts
import { LOG2E } from "@nick/math/constants/log2e";

console.assert(LOG2E === 1.4426950408889634);
```

##### Type-Level Usage

```ts
import { LOG2E } from "@nick/math/constants/log2e";

function assertBase2LogarithmOfE(log2e: number): asserts log2e is LOG2E {
  if (log2e !== LOG2E) throw new TypeError(`Expected ${LOG2E}, got ${log2e}`);
}
```

#### `LOG10E` (Base 10 logarithm of E)

```ts
import { LOG10E } from "@nick/math/constants/log10e";

console.assert(LOG10E === 0.4342944819032518);
```

##### Type-Level Usage

```ts
import { LOG10E } from "@nick/math/constants/log10e";

function assertBase10LogarithmOfE(log10e: number): asserts log10e is LOG10E {
  if (log10e !== LOG10E) {
    throw new TypeError(`Expected ${LOG10E}, got ${log10e}`);
  }
}
```

#### `PI` (π)

```ts
import { PI } from "@nick/math/constants/pi";

console.assert(PI === 3.141592653589793);
```

##### Type-Level Usage

```ts
import { PI } from "@nick/math/constants/pi";

function assertPi(pi: number): asserts pi is PI {
  if (pi !== PI) throw new TypeError(`Expected ${PI}, got ${pi}`);
}
```

#### `SQRT1_2` (Square root of 1/2)

```ts
import { SQRT1_2 } from "@nick/math/constants/sqrt1_2";

console.assert(SQRT1_2 === 0.7071067811865476);
```

##### Type-Level Usage

```ts
import { SQRT1_2 } from "@nick/math/constants/sqrt1_2";

function assertSquareRootOfOneHalf(
  sqrt1_2: number,
): asserts sqrt1_2 is SQRT1_2 {
  if (sqrt1_2 !== SQRT1_2) {
    throw new TypeError(`Expected ${SQRT1_2}, got ${sqrt1_2}`);
  }
}
```

#### `SQRT2` (Square root of 2)

```ts
import { SQRT2 } from "@nick/math/constants/sqrt2";

console.assert(SQRT2 === 1.4142135623730951);
```

##### Type-Level Usage

```ts
import { SQRT2 } from "@nick/math/constants/sqrt2";

function assertSquareRootOfTwo(sqrt2: number): asserts sqrt2 is SQRT2 {
  if (sqrt2 !== SQRT2) throw new TypeError(`Expected ${SQRT2}, got ${sqrt2}`);
}
```

#### `EPSILON`

Represents the smallest positive number that can be added to `1` to get a result
different from `1`.

```ts
import { EPSILON } from "@nick/math/constants/epsilon";

console.assert(EPSILON === 2.220446049250313e-16);
```

##### Type-Level Usage

```ts
import { EPSILON } from "@nick/math/constants/epsilon";

function assertEpsilon(epsilon: number): asserts epsilon is EPSILON {
  if (epsilon !== EPSILON) {
    throw new TypeError(`Expected ${EPSILON}, got ${epsilon}`);
  }
}
```

#### `MAX_SAFE_INTEGER`

The maximum safe integer in JavaScript, `2^53 - 1`.

```ts
import { MAX_SAFE_INTEGER } from "@nick/math/constants/max-safe-integer";

console.assert(MAX_SAFE_INTEGER === 9007199254740991);
```

##### Type-Level Usage

```ts
import { MAX_SAFE_INTEGER } from "@nick/math/constants/max-safe-integer";

function assertMaxSafeInteger(
  maxSafeInteger: number,
): asserts maxSafeInteger is MAX_SAFE_INTEGER {
  if (maxSafeInteger !== MAX_SAFE_INTEGER) {
    throw new TypeError(`Expected ${MAX_SAFE_INTEGER}, got ${maxSafeInteger}`);
  }
}
```

#### `MIN_SAFE_INTEGER`

The minimum safe integer in JavaScript, `-2^53 + 1`.

```ts
import { MIN_SAFE_INTEGER } from "@nick/math/constants/min-safe-integer";

console.assert(MIN_SAFE_INTEGER === -9007199254740991);
```

##### Type-Level Usage

```ts
import { MIN_SAFE_INTEGER } from "@nick/math/constants/min-safe-integer";

function assertMinSafeInteger(
  minSafeInteger: number,
): asserts minSafeInteger is MIN_SAFE_INTEGER {
  if (minSafeInteger !== MIN_SAFE_INTEGER) {
    throw new TypeError(`Expected ${MIN_SAFE_INTEGER}, got ${minSafeInteger}`);
  }
}
```

#### `MAX_VALUE`

The maximum representable value in JavaScript.

```ts
import { MAX_VALUE } from "@nick/math/constants/max-value";

console.assert(MAX_VALUE === 1.7976931348623157e308);
```

##### Type-Level Usage

```ts
import { MAX_VALUE } from "@nick/math/constants/max-value";

function assertMaxValue(maxValue: number): asserts maxValue is MAX_VALUE {
  if (maxValue !== MAX_VALUE) {
    throw new TypeError(`Expected ${MAX_VALUE}, got ${maxValue}`);
  }
}
```

#### `MIN_VALUE`

The minimum representable value in JavaScript.

```ts
import { MIN_VALUE } from "@nick/math/constants/min-value";

console.assert(MIN_VALUE === 5e-324);
```

##### Type-Level Usage

```ts
import { MIN_VALUE } from "@nick/math/constants/min-value";

function assertMinValue(minValue: number): asserts minValue is MIN_VALUE {
  if (minValue !== MIN_VALUE) {
    throw new TypeError(`Expected ${MIN_VALUE}, got ${minValue}`);
  }
}
```

#### `NEGATIVE_INFINITY`

The negative infinity value in JavaScript.

```ts
import { NEGATIVE_INFINITY } from "@nick/math/constants/negative-infinity";

console.assert(NEGATIVE_INFINITY === -Infinity);
```

##### Type-Level Usage

```ts
import { NEGATIVE_INFINITY } from "@nick/math/constants/negative-infinity";

function assertNegativeInfinity(
  negativeInfinity: number,
): asserts negativeInfinity is NEGATIVE_INFINITY {
  if (negativeInfinity !== NEGATIVE_INFINITY) {
    throw new TypeError(
      `Expected ${NEGATIVE_INFINITY}, got ${negativeInfinity}`,
    );
  }
}
```

#### `POSITIVE_INFINITY`

The positive infinity value in JavaScript.

```ts
import { POSITIVE_INFINITY } from "@nick/math/constants/positive-infinity";

console.assert(POSITIVE_INFINITY === Infinity);
```

##### Type-Level Usage

```ts
import { POSITIVE_INFINITY } from "@nick/math/constants/positive-infinity";

function assertPositiveInfinity(
  positiveInfinity: number,
): asserts positiveInfinity is POSITIVE_INFINITY {
  if (positiveInfinity !== POSITIVE_INFINITY) {
    throw new TypeError(
      `Expected ${POSITIVE_INFINITY}, got ${positiveInfinity}`,
    );
  }
}
```

#### `NAN`

The `NaN` value in JavaScript, representing "Not a Number".

```ts
import { NAN } from "@nick/math/constants/nan";

console.log(NAN); // NaN

// or, to use the same name as the global constant:
import { NaN } from "@nick/math/constants/nan";

console.log(NaN); // NaN
```

##### Type-Level Usage

```ts
import { NaN } from "@nick/math/constants/nan";

function assertNaN(nan: number): asserts nan is NaN {
  if (nan !== nan) throw new TypeError(`Expected ${NaN}, got ${nan}`);
}
```

---

### Functions

#### `abs`

Returns the absolute value of a number.

```ts
import { abs } from "@nick/math/abs";

console.assert(abs(-1) === 1);
```

#### `acos`

Returns the arccosine of a number.

```ts
import { acos } from "@nick/math/acos";

console.assert(acos(0.5) === 1.0471975511965979);
```

#### `acosh`

Returns the inverse hyperbolic cosine of a number.

```ts
import { acosh } from "@nick/math/acosh";

console.assert(acosh(1) === 0);
```

#### `asin`

Returns the arcsine of a number.

```ts
import { asin } from "@nick/math/asin";

console.assert(asin(0.5) === 0.5235987755982989);
```

#### `asinh`

Returns the inverse hyperbolic sine of a number.

```ts
import { asinh } from "@nick/math/asinh";

console.assert(asinh(0.5) === 0.48121182505960347);
```

#### `atan`

Returns the arctangent of a number.

```ts
import { atan } from "@nick/math/atan";

console.assert(atan(0.5) === 0.4636476090008061);
```

#### `atan2`

Returns the arctangent of the quotient of its arguments.

```ts
import { atan2 } from "@nick/math/atan2";

console.assert(atan2(1, 1) === 0.7853981633974483);
```

#### `atanh`

Returns the inverse hyperbolic tangent of a number.

```ts
import { atanh } from "@nick/math/atanh";

console.assert(atanh(0.5) === 0.5493061443340549);
```

#### `cbrt`

Returns the cube root of a number.

```ts
import { cbrt } from "@nick/math/cbrt";

console.assert(cbrt(27) === 3);
```

#### `ceil`

Returns the smallest integer greater than or equal to a number.

```ts
import { ceil } from "@nick/math/ceil";

console.assert(ceil(1.5) === 2);
```

#### `clz32`

Returns the number of leading zero bits in the 32-bit binary representation of a
number.

```ts
import { clz32 } from "@nick/math/clz32";

console.assert(clz32(1) === 31);
```

#### `cos`

Returns the cosine of a number.

```ts
import { cos } from "@nick/math/cos";

console.assert(cos(0.5) === 0.8775825618903728);
```

#### `cosh`

Returns the hyperbolic cosine of a number.

```ts
import { cosh } from "@nick/math/cosh";

console.assert(cosh(0.5) === 1.1276259652063807);
```

#### `exp`

Returns `E` raised to the power of a number.

```ts
import { exp } from "@nick/math/exp";

console.assert(exp(1) === 2.718281828459045);
```

#### `expm1`

Returns `E` raised to the power of a number, minus `1`.

```ts
import { expm1 } from "@nick/math/expm1";

console.assert(expm1(1) === 1.718281828459045);
```

#### `floor`

Returns the largest integer less than or equal to a number.

```ts
import { floor } from "@nick/math/floor";

console.assert(floor(1.5) === 1);
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

console.assert(f16round(PI) === 3.140625);
```

#### `hypot`

Returns the square root of the sum of the squares of its arguments.

```ts
import { hypot } from "@nick/math/hypot";

console.assert(hypot(3, 4) === 5);
```

#### `imul`

Returns the result of a 32-bit integer multiplication.

```ts
import { imul } from "@nick/math/imul";

console.assert(imul(2, 3) === 6);
```

#### `log`

Returns the natural logarithm of a number.

```ts
import { log } from "@nick/math/log";

console.assert(log(9) === 2.1972245773362196);
```

#### `log1p`

Returns the natural logarithm of `1` plus a number.

```ts
import { log1p } from "@nick/math/log1p";

console.assert(log1p(9) === 2.302585092994046);
```

#### `log10`

Returns the base 10 logarithm of a number.

```ts
import { log10 } from "@nick/math/log10";

console.assert(log10(100) === 2);
```

#### `log2`

Returns the base 2 logarithm of a number.

```ts
import { log2 } from "@nick/math/log2";

console.assert(log2(8) === 3);
```

#### `max`

Returns the largest of zero or more numbers.

```ts
import { max } from "@nick/math/max";

console.assert(max(1, 2, 3) === 3);
```

#### `min`

Returns the smallest of zero or more numbers.

```ts
import { min } from "@nick/math/min";

console.assert(min(1, 2, 3) === 1);
```

#### `pow`

Returns the base to the exponent power.

```ts
import { pow } from "@nick/math/pow";

console.assert(pow(2, 3) === 8);
```

#### `random`

Returns a pseudo-random number between `0` and `1`.

```ts
import { random } from "@nick/math/random";

console.assert(random() >= 0 && random() < 1);
```

#### `round`

Returns the value of a number rounded to the nearest integer.

```ts
import { round } from "@nick/math/round";

console.assert(round(1.5) === 2);
```

#### `sign`

Returns the sign of a number, indicating whether it is positive, negative, or
zero.

```ts
import { sign } from "@nick/math/sign";

console.assert(sign(-1) === -1);
```

#### `sin`

Returns the sine of a number.

```ts
import { sin } from "@nick/math/sin";

console.assert(sin(0.5) === 0.479425538604203);
```

#### `sinh`

Returns the hyperbolic sine of a number.

```ts
import { sinh } from "@nick/math/sinh";

console.assert(sinh(0.5) === 0.5210953054937474);
```

#### `sqrt`

Returns the square root of a number.

```ts
import { sqrt } from "@nick/math/sqrt";

console.assert(sqrt(9) === 3);
```

#### `tan`

Returns the tangent of a number.

```ts
import { tan } from "@nick/math/tan";

console.assert(tan(0.5) === 0.5463024898437905);
```

#### `tanh`

Returns the hyperbolic tangent of a number.

```ts
import { tanh } from "@nick/math/tanh";

console.assert(tanh(0.5) === 0.46211715726000974);
```

#### `trunc`

Returns the integer part of a number by removing any fractional digits.

```ts
import { trunc } from "@nick/math/trunc";

console.assert(trunc(1.5) === 1);
```

---

### Guards

#### `isFinite`

Determines whether a number is finite.

```ts
import { isFinite } from "@nick/math/is/finite";

console.assert(isFinite(1));
```

#### `isInteger`

Determines whether a number is an integer.

```ts
import { isInteger } from "@nick/math/is/integer";

console.assert(isInteger(1));
```

#### `isNaN`

Determines whether a value is `NaN`.

```ts
import { isNaN } from "@nick/math/is/nan";

console.assert(isNaN(NaN));
```

#### `isSafeInteger`

Determines whether a number is a safe integer.

```ts
import { isSafeInteger } from "@nick/math/is/safe-integer";

console.assert(isSafeInteger(1));
```

#### `isNegativeZero`

Determines whether a number is `-0`.

```ts
import { isNegativeZero } from "@nick/math/is/negative-zero";

console.assert(isNegativeZero(-0));
console.assert(!isNegativeZero(0));
```

#### `isPositiveInfinity`

Determines whether a number is positive infinity.

```ts
import { isPositiveInfinity } from "@nick/math/is/positive-infinity";

console.assert(isPositiveInfinity(Infinity));
```

#### `isNegativeInfinity`

Determines whether a number is negative infinity.

```ts
import { isNegativeInfinity } from "@nick/math/is/negative-infinity";

console.assert(isNegativeInfinity(-Infinity));
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
