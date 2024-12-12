// deno-lint-ignore no-unused-vars
const Safe_Integer: unique symbol = Symbol("SafeInteger");

interface Safe_Integer {
  readonly [Safe_Integer]: true;
}

/**
 * Represents any finite integer that is within the range of `MIN_SAFE_INTEGER`
 * (`-2^53 + 1`) and `MAX_SAFE_INTEGER` (`2^53 - 1`).
 *
 * This type is used by `isSafeInteger` to type-guard values as safe integers,
 * providing an additional level of type safety for integer values.
 *
 * @category Types
 * @tags Safe Integer, nominal
 */
export type SafeInteger<N extends number = number> = N & Safe_Integer;
