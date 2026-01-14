/**
 * Calculates the hypotenuse value using the Pythagorean theorem, which is the
 * sqrt of the sum of the squares of its arguments (`sqrt(a^2 + b^2 + ...`).
 * Avoids overflow or underflow errors.
 *
 * **Note**: This equation is also known as the Euclidean distance or L² norm.
 *
 * @module hypot
 */
import { abs } from "./abs.ts";
import { sqrt } from "./sqrt.ts";

/**
 * Calculates the hypotenuse value using the Pythagorean theorem, which is the
 * sqrt of the sum of the squares of its arguments (`sqrt(a^2 + b^2 + ...)`).
 * Avoids overflow or underflow errors.
 *
 * @param values The numbers to calculate the hypotenuse of.
 * @returns The hypotenuse of the provided numbers (also known as the Euclidean
 * distance or L² norm of the values).
 * @category Trigonometry
 * @tags hypotenuse, pythagorean, euclidean
 * @example
 * ```typescript
 * hypot(3, 4); // 5
 * hypot(5, 12); // 13
 * ```
 */
export function hypot(...values: number[]): number {
  if (values.length === 0) return 0;
  let hasInfinity = false;
  let hasNaN = false;
  let maximum = 0;

  for (const value of values) {
    if (value !== value) {
      hasNaN = true;
      continue;
    }
    if (value === Infinity || value === -Infinity) {
      hasInfinity = true;
      continue;
    }
    const magnitude = abs(value);
    if (magnitude > maximum) maximum = magnitude;
  }

  if (hasInfinity) return Infinity;
  if (hasNaN) return NaN;
  if (maximum === 0) return 0;

  let sum = 0;
  for (const value of values) {
    const normalized = value / maximum;
    sum += normalized * normalized;
  }

  return maximum * sqrt(sum);
}
