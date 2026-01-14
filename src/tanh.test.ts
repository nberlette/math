import assert from "node:assert";
import { describe, it } from "node:test";
import { assertClose } from "./internal/_test_utils.ts";
import { tanh } from "./tanh.ts";

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

describe("tanh", () => {
  it("is a function", () => {
    assert.strictEqual(typeof tanh, "function");
  });

  it("has the expected arity", () => {
    assert.strictEqual(tanh.length, 1);
  });

  it("matches Math.tanh", () => {
    const native = Math.tanh;
    if (typeof native !== "function") {
      return;
    }
    for (const input of cases) {
      const expected = native(input);
      const actual = tanh(input);
      assertClose(actual, expected);
    }
  });
});
