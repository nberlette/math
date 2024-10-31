/**
 * Performant local implementation of the `Math.log` function.
 *
 * It does not rely on any native `Math.*` functions, using pure arithmetic to
 * calculate the natural logarithm of the provided number.
 *
 * @category Arithmetic
 * @module log
 */
import { abs } from "./abs.ts";
import {
  EPSILON,
  LN2,
  NAN,
  NEGATIVE_INFINITY,
  POSITIVE_INFINITY,
} from "./constants.ts";

/**
 * Performant local implementation of the `Math.log` function.
 *
 * It does not rely on any native `Math.*` functions, using pure arithmetic to
 * calculate the natural logarithm of the provided number.
 *
 * @param x The number to calculate the natural logarithm of (logₑ)
 * @returns The natural logarithm of the provided number.
 * @category Arithmetic
 */
export function log(x: number): number {
  if ((x = +x) !== x || x < 0) return NAN; // NaN for x < 0
  if (x === 0) return NEGATIVE_INFINITY; // -Infinity for x <= 0
  if (x === 1) return 0; // 0 for x = 1
  if (x === POSITIVE_INFINITY) return x; // Infinity for x = Infinity

  let n = 0;
  while (x > 2) x /= 2, n++;

  const z = (x - 1) / (x + 1), z2 = z * z;
  let sum = 0, term = z, i = 1;

  // series expansion for ln(1+z) converges faster when z is [-1, 1]
  while (abs(term) >= EPSILON) {
    sum += term / i;
    term *= z2;
    i += 2;
  }

  // ln(x) + adjustment factor for original input
  return 2 * sum + n * LN2;
}
