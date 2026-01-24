/**
 * Provides the `Finite` branded type for numbers that are neither
 * infinite nor `NaN`.
 *
 * @example
 * ```ts
 * import type { Finite } from "@nick/math/types/finite";
 * import { expectType } from "jsr:@nick/is@0.2.0-rc.6/type/expect";
 *
 * const value = 42 as Finite;
 * expectType<Finite>(value);
 * ```
 * @category Types
 * @module types/finite
 */

import type {
  NEGATIVE_INFINITY,
  POSITIVE_INFINITY,
} from "../constants/infinity.ts";
import type { NAN } from "../constants/nan.ts";

const Finite: unique symbol = Symbol("Finite");

interface IsFinite {
  readonly [Finite]: never;
}

/**
 * Branded nominal type that represents a finite number, which is a real number
 * that is not infinite or `NaN`.
 *
 * @category Types
 * @tags number, nominal, finite
 */
export type Finite<N extends number = number> = (
  & Exclude<N, NAN | POSITIVE_INFINITY | NEGATIVE_INFINITY>
  & IsFinite
) extends infer U extends N ? U : never;
