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
 * @tags Number, Finite
 */
export type Finite<N extends number = number> = (
  & Exclude<N, NAN | POSITIVE_INFINITY | NEGATIVE_INFINITY>
  & IsFinite
) extends infer U extends N ? U : never;
