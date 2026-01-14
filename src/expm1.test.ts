import assert from "node:assert";
import { describe, it } from "node:test";
import { assertClose } from "./internal/_test_utils.ts";
import { expm1 } from "./expm1.ts";

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

describe("expm1", () => {
  it("is a function", () => {
    assert.strictEqual(typeof expm1, "function");
  });

  it("has the expected arity", () => {
    assert.strictEqual(expm1.length, 1);
  });

  it("matches Math.expm1", () => {
    const native = Math.expm1;
    if (typeof native !== "function") {
      return;
    }
    for (const input of cases) {
      const expected = native(input);
      const actual = expm1(input);
      assertClose(actual, expected);
    }
  });
});
