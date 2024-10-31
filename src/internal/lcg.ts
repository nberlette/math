import { floor } from "../floor.ts";
import { DateNow, SymbolIterator } from "./primordials.ts";

/**
 * A Linear Congruential Generator (LCG) is a simple pseudorandom number
 * generator that produces a sequence of random numbers based on a linear
 * equation. This implementation uses the Park-Miller LCG algorithm, which is a
 * widely-used variant with good statistical properties.
 *
 * @see https://en.wikipedia.org/wiki/Linear_congruential_generator
 */
export class LCG implements Iterable<number> {
  static readonly #instance = new LCG();

  /**
   * Generates a pseudorandom number in the range [0, 1) using the Park-Miller
   * LCG algorithm and an optional `seed` (defaulting to the current time).
   *
   * @param [seed] The seed for the generator.
   * @returns A pseudorandom float in the range [0, 1).
   */
  static random(seed = DateNow()): number {
    return LCG.#instance.reset(seed).random();
  }

  /**
   * Generates a pseudorandom integer in the range [min, max] using the
   * Park-Miller LCG algorithm and an optional `seed` (defaulting to the
   * current time).
   *
   * @param [min] The minimum integer value. Defaults to 0.
   * @param [max] The maximum integer value. Defaults to 1e+308.
   * @param [seed] The seed for the generator.
   * @returns A pseudorandom integer in the range [min, max].
   */
  static randomInt(min = 0, max = 1e308, seed = DateNow()): number {
    return LCG.#instance.reset(seed).randomInt(min, max);
  }

  readonly #modulus = 2 ** 31 - 1;
  readonly #multiplier = 16807;
  readonly #increment = 0;

  /**
   * Initialize the LCG with an optional seed.
   * If no seed is provided, it defaults to the current time.
   *
   * @param seed The starting seed for the generator.
   */
  constructor(protected seed: number = DateNow()) {
    this.seed %= this.#modulus;
  }

  /**
   * Generate the next random number in the sequence.
   * This will be a float between 0 and 1.
   *
   * @returns A pseudorandom float.
   */
  next(): IteratorResult<number, number> {
    const lhs = this.#multiplier * this.seed + this.#increment;
    this.seed = lhs % this.#modulus;
    const value = this.seed / this.#modulus;

    return { value, done: false };
  }

  /**
   * Generate a random float between 0 and 1.
   * @returns A pseudorandom float.
   */
  random(): number {
    return this.next().value;
  }

  /**
   * Generate a random integer between min and max, inclusive.
   * @param min The minimum integer value.
   * @param max The maximum integer value.
   * @returns A pseudorandom integer.
   */
  randomInt(min: number, max: number): number {
    const next = this.random();
    return floor(next * (max - min + 1)) + min;
  }

  /**
   * Reset the generator with a new seed.
   * @param seed The new seed for the generator.
   */
  reset(seed: number): this {
    this.seed = seed % this.#modulus;
    return this;
  }

  [SymbolIterator](): IterableIterator<number> {
    return this;
  }
}
