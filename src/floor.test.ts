import assert from "node:assert";
import { describe, it } from "node:test";
import { assertSameValue } from "./internal/_test_utils.ts";
import { floor } from "./floor.ts";

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

describe("floor", () => {
  it("is a function", () => {
    assert.strictEqual(typeof floor, "function");
  });

  it("has the expected arity", () => {
    assert.strictEqual(floor.length, 1);
  });

  it("matches Math.floor", () => {
    const native = Math.floor;
    if (typeof native !== "function") {
      return;
    }
    for (const input of cases) {
      const expected = native(input);
      const actual = floor(input);
      assertSameValue(actual, expected);
    }
  });
});
