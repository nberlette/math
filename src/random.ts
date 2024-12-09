/**
 * Generates a pseudo-random number in the range `[0, 1)`.
 *
 * **Important**: This function is not cryptographically secure. Do not use it
 * for security-sensitive applications.
 *
 * @example
 * ```ts
 * import { random } from "@nick/math/random";
 *
 * console.log(random());
 * // => 0.5390711768976619
 * ```
 * @module random
 */
import { DateNow } from "./internal/primordials.ts";

/**
 * Mersenne Twister implementation in TypeScript.
 *
 * Based on the original C-code by Makoto Matsumoto and Takuji Nishimura.
 *
 * @remarks
 * This implementation is a simplified version of the original API, providing
 * only a `random()` and `randomInt()` method for generating pseudo-random
 * numbers, and a `init()` method for seeding the generator.
 *
 * Benchmarks show this API to be ever-so-slightly slower than the native
 * `Math.random` function, while still performing well within an acceptable
 * timing window. Since this is a pure-JS implementation, achieving speeds on
 * the same level as a native API is simply not possible.
 * @example
 * ```ts
 * import { MT19937 } from "@nick/math/random";
 *
 * const mt = new MT19937();
 * const n = mt.random(); // e.g. 0.9507143115624784
 * ```
 * @example
 * ```ts
 * import { MT19937 } from "@nick/math/random";
 *
 * const mt = new MT19937(42);
 * console.log(mt.random()); // 0.37454011430963874
 * ```
 *
 * @see http://www.math.sci.hiroshima-u.ac.jp/~m-mat/MT/emt.html for the
 * original C code this is based on and more information on Mersenne Twister.
 */
export class MT19937 {
  static readonly #instance = new MT19937();

  /**
   * Initialize the singleton instance with a seed.
   *
   * @param seed - The seed value.
   * @returns The singleton instance.
   */
  static init(...seed: number[]): MT19937 {
    if (seed.length > 1) {
      return MT19937.#instance.initFromArray(...seed);
    } else {
      return MT19937.#instance.init(seed[0])
    }
  }

  /**
   * Generates a random number on [0, 1)-real-interval.
   * @returns A floating-point number between 0 and 1.
   */
  static random(): number {
    return MT19937.#instance.random();
  }

  /**
   * Generates a random number on [0, 0xffffffff]-interval.
   * @returns A 32-bit unsigned integer.
   */
  static randomInt(): number {
    return MT19937.#instance.randomInt();
  }

  /** Period parameters */
  readonly #N = 624;
  /** The number of 32 bit words */
  readonly #M = 397;
  /** Constant Vector A */
  readonly #MATRIX_A = 0x9908b0df;
  /** Most significant W-R bits */
  readonly #UPPER_MASK = 0x80000000;
  /** Least significant R bits */
  readonly #LOWER_MASK = 0x7fffffff;
  /** UPPER_MASK + LOWER_MASK + 1 */
  readonly #TOTAL_MASK = 0x100000000;

  /** the array for the state vector */
  #mt = Array.from({ length: 624 }, () => 0);

  /** mti == N + 1 means mt[N] is not initialized */
  #mti = 625;

  /**
   * Initializes a new instance of the MersenneTwister class.
   * @param seed - The seed value.
   */
  constructor(seed?: number) {
    this.init(seed ?? DateNow() >>> 0);
  }

  /**
   * Initializes mt[N] with a seed.
   * @param seed - The seed value.
   */
  init(seed?: number): this {
    seed ??= DateNow() >>> 0;
    this.#mt[0] = seed >>> 0;
    const mt = this.#mt;
    for (let i = 1; i < this.#N; i++) {
      const s = mt[i - 1] ^ (mt[i - 1] >>> 30);
      let l = (s & 0xffff0000) >>> 16;
      l *= 1812433253;
      l <<= 16;
      let r = s & 0x0000ffff;
      r *= 1812433253;
      mt[this.#mti = i] = (l + r + i) >>> 0;
    }
    this.#mti = this.#N;
    return this;
  }

  /**
   * Initialize by an array with array-length.
   * @param seeds - The array for initializing keys.
   */
  initFromArray(...seeds: number[]): this {
    let i = 1, j = 0;
    const len = seeds.length;
    this.init(19650218);
    let k = this.#N > len ? this.#N : len;
    for (; k > 0; k--) {
      const s = this.#mt[i - 1] ^ (this.#mt[i - 1] >>> 30);
      const x = 1664525, y = 0xffff0000, z = 0x0000ffff;
      const u = (s & z) * x;
      let t = ((s & y) >>> 16) * x << 16;
      this.#mt[i] = (t = this.#mt[i] ^ t + u, t += seeds[j] + j, t >>> 0);
      i++, j++;
      if (i >= this.#N) {
        this.#mt[0] = this.#mt[this.#N - 1];
        i = 1;
      }
      if (j >= len) j = 0;
    }
    for (k = this.#N - 1; k > 0; k--) {
      const s = this.#mt[i - 1] ^ (this.#mt[i - 1] >>> 30);
      this.#mt[i] = ((this.#mt[i] ^
        (((s & 0xffff0000) >>> 16) * 1566083941 << 16) +
          (s & 0x0000ffff) * 1566083941) -
        i) >>> 0;
      i++;
      if (i >= this.#N) {
        this.#mt[0] = this.#mt[this.#N - 1];
        i = 1;
      }
    }
    /* MSB is 1; assuring non-zero initial array */
    this.#mt[0] = 0x80000000;
    return this;
  }

  /**
   * Generates a random number on [0, 0xffffffff]-interval.
   * @returns A 32-bit unsigned integer.
   */
  randomInt(): number {
    let y: number;
    const mag01 = [0x0, this.#MATRIX_A];

    if (this.#mti >= this.#N) {
      let kk: number;

      /* a default initial seed is used */
      if (this.#mti === this.#N + 1) this.init(5489);

      for (kk = 0; kk < this.#N - this.#M; kk++) {
        y = (this.#mt[kk] & this.#UPPER_MASK) |
          (this.#mt[kk + 1] & this.#LOWER_MASK);
        this.#mt[kk] = this.#mt[kk + this.#M] ^ (y >>> 1) ^ mag01[y & 0x1];
      }

      for (; kk < this.#N - 1; kk++) {
        y = (this.#mt[kk] & this.#UPPER_MASK) |
          (this.#mt[kk + 1] & this.#LOWER_MASK);
        this.#mt[kk] = this.#mt[kk + (this.#M - this.#N)] ^ (y >>> 1) ^
          mag01[y & 0x1];
      }

      y = (this.#mt[this.#N - 1] & this.#UPPER_MASK) |
        (this.#mt[0] & this.#LOWER_MASK);
      this.#mt[this.#N - 1] = this.#mt[this.#M - 1] ^
        (y >>> 1) ^
        mag01[y & 0x1];

      this.#mti = 0;
    }

    y = this.#mt[this.#mti++];

    // Tempering
    y ^= y >>> 11;
    y ^= (y << 7) & 0x9d2c5680;
    y ^= (y << 15) & 0xefc60000;
    y ^= y >>> 18;

    return y >>> 0;
  }

  /**
   * Generates a random number on [0, 1)-real-interval.
   * @returns A floating-point number between 0 and 1.
   */
  random(): number {
    return this.randomInt() / this.#TOTAL_MASK;
  }
}

/**
 * Generates a pseudo-random number in the range `[0, 1)`. This function is not
 * cryptographically secure, and should not be used for any security-sensitive
 * applications. It was designed to be a drop-in replacement for the native
 * `Math.random()` function, with support for seeding the generator.
 *
 * @returns A pseudo-random number in the range `[0, 1)`.
 * @category Random
 * @see {@linkcode random.init} for seeding the generator.
 * @see {@linkcode MT19937} for the Mersenne-Twister implementation this uses.
 */
export function random(): number {
  return MT19937.random();
}

/**
 * Initializes the random number generator with a seed or sequence of seeds.
 *
 * This is useful for testing, allowing you to generate a deterministic
 * sequence of pseudo-random numbers based on the provided seed value.
 *
 * @param seed - The seed value or sequence of seed values.
 * @returns The singleton instance of the random number generator.
 */
random.init = MT19937.init;
