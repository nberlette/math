import assert from "node:assert";
import { describe, it } from "node:test";
import * as constants from "./constants/index.ts";
import { assertSameValue } from "./internal/_test_utils.ts";

const cases = {
  Math: [
    "E",
    "LN2",
    "LN10",
    "LOG2E",
    "LOG10E",
    "PI",
    "SQRT1_2",
    "SQRT2",
  ],
  Number: [
    "EPSILON",
    "MAX_SAFE_INTEGER",
    "MIN_SAFE_INTEGER",
    "NEGATIVE_INFINITY",
    "POSITIVE_INFINITY",
    "NaN",
    "MAX_VALUE",
    "MIN_VALUE",
  ],
} as const;

for (const kind of Object.keys(cases) as (keyof typeof cases)[]) {
  const keys = cases[kind];
  for (const key of keys) {
    describe(key, () => {
      const value = constants[key];
      const parent = globalThis[kind];
      const expected = parent[key as keyof typeof parent];
      it(`is equal to ${kind}.${key}`, () => {
        assert.strictEqual(typeof value, "number");
        assertSameValue(value, expected as number);
      });
    });
  }
}
