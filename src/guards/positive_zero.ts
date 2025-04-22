/**
 * Checks if the provided number is exactly positive zero (`+0`). This is a
 * stricter than `x === 0`, as it will return `false` for `-0`.
 *
 * @module positive-zero
 */
export * from "../constants/positive_zero.ts";

/**
 * Checks if the provided number is a positive zero (`+0`).
 *
 * @param it The number to check.
 * @returns `true` if the provided number is exactly `+0`, otherwise `false`.
 * @category Guards
 * @tags Positive Zero
 */
export function isPositiveZero(it: number): it is 0 {
  return (it = +it) === 0 && (1 / it) === (1 / 0);
}
