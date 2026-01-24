/**
 * This module provides runtime and type-level implementations of the `LN10`
 * constant found in the native `Math` namespace, which represents the natural
 * logarithm of the number `10` (approximately equal to `2.302585092994046`).
 *
 * The `LN10` constant exported by this module can be imported using a standard
 * named import (i.e., at the _value_ level), or via a type-only import for a
 * compile-time only reference to the same value.
 *
 * @example
 * ```ts
 * import { LN10 } from "@nick/math/constants/ln10";
 * import assert from "node:assert";
 *
 * assert.strictEqual(LN10, 2.302585092994046);
 * ```
 * @example
 * ```ts
 * import type { LN10 } from "@nick/math/constants/ln10";
 * import { expectType } from "jsr:@nick/is@0.2.0-rc.6/type/expect";
 *
 * expectType<LN10>(2.302585092994046);
 * ```
 * @module ln10
 */

/**
 * Represents the natural logarithm of the number `10`, approximately equal to
 * `2.302585092994046`. This corresponds to the native `Math.LN10` constant.
 * @example
 * ```ts
 * import { LN10 } from "@nick/math/constants/ln10";
 * import assert from "node:assert";
 *
 * assert.strictEqual(LN10, 2.302585092994046);
 * ```
 * @category Constants
 */
export const LN10: LN10 = 2.302585092994046;

/**
 * Type-level alias of the `LN10` constant exported by this module. This allows
 * `LN10` to be imported using a standard named import (i.e. the _value_ level)
 * or via type-only import for a compile-time only reference to the same value.
 *
 * @example
 * ```ts
 * import type { LN10 } from "@nick/math/constants/ln10";
 * import { expectType } from "jsr:@nick/is@0.2.0-rc.6/type/expect";
 *
 * expectType<LN10>(2.302585092994046);
 * ```
 * @category Constants
 */
export type LN10 = 2.302585092994046;
