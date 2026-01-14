import assert from "node:assert";
import { describe, it } from "node:test";
import { assertClose } from "./internal/_test_utils.ts";
import { cosh } from "./cosh.ts";

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

describe("cosh", () => {
  it("is a function", () => {
    assert.strictEqual(typeof cosh, "function");
  });

  it("has the expected arity", () => {
    assert.strictEqual(cosh.length, 1);
  });

  it("matches Math.cosh", () => {
    const native = Math.cosh;
    if (typeof native !== "function") {
      return;
    }
    for (const input of cases) {
      const expected = native(input);
      const actual = cosh(input);
      assertClose(actual, expected);
    }
  });
});
