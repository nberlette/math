import assert from "node:assert";
import { describe, it } from "node:test";
import { assertSameValue } from "./internal/_test_utils.ts";
import { sign } from "./sign.ts";

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

describe("sign", () => {
  it("is a function", () => {
    assert.strictEqual(typeof sign, "function");
  });

  it("has the expected arity", () => {
    assert.strictEqual(sign.length, 1);
  });

  it("matches Math.sign", () => {
    const native = Math.sign;
    if (typeof native !== "function") {
      return;
    }
    for (const input of cases) {
      const expected = native(input);
      const actual = sign(input);
      assertSameValue(actual, expected);
    }
  });
});
