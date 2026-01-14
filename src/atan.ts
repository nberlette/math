/**
 * Calculates the arctangent (inverse tangent) of a number, returning a value
 * in the range `[-π/2, π/2]`.
 *
 * @module atan
 */
import { abs } from "./abs.ts";
import { NAN } from "./constants/nan.ts";
import { PI } from "./constants/pi.ts";
import { POSITIVE_INFINITY } from "./constants/positive_infinity.ts";
import { NEGATIVE_INFINITY } from "./constants/negative_infinity.ts";
import { EPSILON } from "./constants/epsilon.ts";

/**
 * Calculates the arctangent (inverse tangent) of a number, returning a value
 * in the range `[-π/2, π/2]`.
 *
 * @param x The number whose arctangent is to be calculated.
 * @returns The arctangent of the provided number, in radians.
 * @category Trigonometry
 * @tags tangent, arctangent
 */
export function atan(x: number): number {
  const PI_OVER_2 = PI / 2, PI_OVER_4 = PI / 4;

  if (isNaN(x)) return NAN;
  if (x === POSITIVE_INFINITY) return PI_OVER_2;
  if (x === NEGATIVE_INFINITY) return -PI_OVER_2;
  if (x === 0) return x; // Preserve -0
  if (x < 0) return -atan(-x);

  // for large x, use the identity: arctan(x) = π/2 - arctan(1/x)
  if (x > 1) return PI_OVER_2 - atan(1 / x);

  // for x near 1, use an alternative series expansion
  if (x > 0.5) {
    const a = (x - 1) / (x + 1), a2 = a * a;
    let term = a, sum = term, n = 1;

    // Use a convergence threshold appropriate for double-precision
    // floating-point numbers
    const MAX_ITERATIONS = 1000;
    while (abs(term) > EPSILON && n < MAX_ITERATIONS) {
      term *= -a2;
      sum += term / (2 * n + 1);
      n++;
    }

    return PI_OVER_4 + sum;
  }

  // for x <= 0.5, use the standard Taylor series expansion
  const x2 = x * x;
  let term = x, sum = x, n = 1;

  const MAX_ITERATIONS = 1e5;
  while (abs(term) > EPSILON && n < MAX_ITERATIONS) {
    term *= -x2;
    sum += term / (2 * n + 1);
    n++;
  }

  return sum;
}
