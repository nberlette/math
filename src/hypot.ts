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
import { max } from "./max.ts";

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
  const maximum = max(...values.map(abs));

  let sum = 0;
  for (const value of values) {
    const normalized = value / maximum;
    sum += normalized * normalized;
  }

  return maximum * sqrt(sum);
}
