import * as constants from "../src/constants/mod.ts";
import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";

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
        expect(value).toBe(expected);
      });
    });
  }
}
