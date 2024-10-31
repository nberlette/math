/**
 * This module provides a performant, zero-dependency implementation of the
 * `Math.f16round` function, which rounds a number to the nearest 16-bit
 * floating point value (half precision).
 *
 * This implementation is based on the `Math.f16round` function from the TC39
 * Proposal for [Float16Array], which began shipping in ES2024. It follows the
 * same rounding and conversion rules as the native implementation, which uses
 * the IEEE 754-2008 half-precision binary floating-point format (binary16).
 *
 * This implementation is designed to be fast and efficient, using only basic
 * arithmetic operations and no external dependencies. It is intended for use
 * in environments that do not yet support the native `Math.f16round` function,
 * as well as for users who need a standalone solution that does not depend on
 * any global namespaces or specific runtime version requirements.
 *
 * [Float16Array]: https://github.com/tc39/proposal-float16array
 *
 * @module f16round
 */
import { decodeF16, encodeF16 } from "./internal/encode_f16.ts";

/**
 * Performant local implementation of the `Math.f16round` function, which
 * rounds a number to the nearest 16-bit floating point value (half precision).
 *
 * @param x The number to round.
 * @returns The 16-bit floating point rounded value of the number.
 * @category Arithmetic
 */
export function f16round(x: number): number {
  return decodeF16(encodeF16(x = +x));
}
