import assert from "node:assert";
import { describe, it } from "node:test";
import { assertClose } from "./internal/_test_utils.ts";
import { atanh } from "./atanh.ts";

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

describe("atanh", () => {
  it("is a function", () => {
    assert.strictEqual(typeof atanh, "function");
  });

  it("has the expected arity", () => {
    assert.strictEqual(atanh.length, 1);
  });

  it("matches Math.atanh", () => {
    const native = Math.atanh;
    if (typeof native !== "function") {
      return;
    }
    for (const input of cases) {
      const expected = native(input);
      const actual = atanh(input);
      assertClose(actual, expected);
    }
  });
});
