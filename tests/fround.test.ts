import assert from "node:assert";
import { describe, it } from "node:test";
import { assertSameValue } from "./internal/_test_utils.ts";
import { fround } from "./fround.ts";

const cases: number[] = [
  -2.5,
  -1,
  -0.0,
  0.0,
  0.5,
  1,
  2,
  10,
  Infinity,
  -Infinity,
  NaN,
];

describe("fround", () => {
  it("is a function", () => {
    assert.strictEqual(typeof fround, "function");
  });

  it("has the expected arity", () => {
    assert.strictEqual(fround.length, 1);
  });

  it("matches Math.fround", () => {
    const native = Math.fround;
    if (typeof native !== "function") {
      return;
    }
    for (const input of cases) {
      const expected = native(input);
      const actual = fround(input);
      assertSameValue(actual, expected);
    }
  });
});
