import assert from "node:assert";
import { describe, it } from "node:test";
import { assertClose } from "./internal/_test_utils.ts";
import { asinh } from "./asinh.ts";

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

describe("asinh", () => {
  it("is a function", () => {
    assert.strictEqual(typeof asinh, "function");
  });

  it("has the expected arity", () => {
    assert.strictEqual(asinh.length, 1);
  });

  it("matches Math.asinh", () => {
    const native = Math.asinh;
    if (typeof native !== "function") {
      return;
    }
    for (const input of cases) {
      const expected = native(input);
      const actual = asinh(input);
      assertClose(actual, expected);
    }
  });
});
