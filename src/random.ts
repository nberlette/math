/**
 * Performant local implementation of the `Math.random` function. This function
 * generates a pseudo-random number between `0` (inclusive) and `1`
 * (exclusive).
 *
 * This implementation does not rely on any global or native Math functions,
 * ensuring compatibility across runtime environments. It uses a linear
 * congruential generator (LCG) with a fixed seed to simulate random number
 * generation. The seed can be reset to produce a repeatable sequence.
 *
 * **Important**: This function is not cryptographically secure. Do not use it
 * for security-sensitive applications.
 *
 * @example
 * ```ts
 * import { random } from "@nick/math";
 *
 * console.log(random());
 * // => 0.5390711768976619
 * ```
 * @module random
 */
import { LCG } from "./internal/lcg.ts";

/**
 * Performant local implementation of the `Math.random` function. This function
 * generates a pseudo-random number between `0` (inclusive) and `1`
 * (exclusive).
 *
 * This implementation does not rely on any global or native Math functions,
 * ensuring compatibility across runtime environments. It uses a linear
 * congruential generator (LCG) with a fixed seed to simulate random number
 * generation. The seed can be reset to produce a repeatable sequence.
 *
 * **Important**: This function is not cryptographically secure. Do not use it
 * for security-sensitive applications.
 *
 * @returns A pseudo-random number between 0 (inclusive) and 1 (exclusive).
 * @category Random
 * @example
 * ```ts
 * import { random } from "@nick/math";
 *
 * console.log(random());
 * // => 0.5390711768976619
 * ```
 */
export function random(): number {
  return LCG.random();
}
