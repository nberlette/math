import assert from "node:assert";
import { describe, it } from "node:test";
import { assertClose } from "./internal/_test_utils.ts";
import { sinh } from "./sinh.ts";

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

describe("sinh", () => {
  it("is a function", () => {
    assert.strictEqual(typeof sinh, "function");
  });

  it("has the expected arity", () => {
    assert.strictEqual(sinh.length, 1);
  });

  it("matches Math.sinh", () => {
    const native = Math.sinh;
    if (typeof native !== "function") {
      return;
    }
    for (const input of cases) {
      const expected = native(input);
      const actual = sinh(input);
      assertClose(actual, expected);
    }
  });
});
