import assert from "node:assert";
import { describe, it } from "node:test";
import { assertClose } from "./internal/_test_utils.ts";
import { exp } from "./exp.ts";

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

describe("exp", () => {
  it("is a function", () => {
    assert.strictEqual(typeof exp, "function");
  });

  it("has the expected arity", () => {
    assert.strictEqual(exp.length, 1);
  });

  it("matches Math.exp", () => {
    const native = Math.exp;
    if (typeof native !== "function") {
      return;
    }
    for (const input of cases) {
      const expected = native(input);
      const actual = exp(input);
      assertClose(actual, expected);
    }
  });
});
