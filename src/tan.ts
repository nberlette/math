/**
 * Calculates the tangent of `x`, returning a value in the range `[-∞, +∞]`.
 *
 * @category Trigonometry
 * @module tan
 */
import { NAN } from "./constants/nan.ts";
import { isFinite } from "./guards/finite.ts";
import { cos } from "./cos.ts";
import { sin } from "./sin.ts";

/**
 * Calculates the tangent of a number, returning a value in range `[-∞, +∞]`.
 *
 * @param x The angle in radians whose tangent is to be calculated.
 * @returns The tangent of the provided angle.
 * @category Trigonometry
 */
export function tan(x: number): number {
  if (!isFinite(x)) return NAN;
  return sin(x) / cos(x);
}
