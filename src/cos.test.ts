import assert from "node:assert";
import { describe, it } from "node:test";
import { assertClose } from "./internal/_test_utils.ts";
import { cos } from "./cos.ts";

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

describe("cos", () => {
  it("is a function", () => {
    assert.strictEqual(typeof cos, "function");
  });

  it("has the expected arity", () => {
    assert.strictEqual(cos.length, 1);
  });

  it("matches Math.cos", () => {
    const native = Math.cos;
    if (typeof native !== "function") {
      return;
    }
    for (const input of cases) {
      const expected = native(input);
      const actual = cos(input);
      assertClose(actual, expected);
    }
  });
});
