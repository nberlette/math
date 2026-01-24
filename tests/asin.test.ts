import assert from "node:assert";
import { describe, it } from "node:test";
import { assertClose } from "./internal/_test_utils.ts";
import { asin } from "./asin.ts";

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

describe("asin", () => {
  it("is a function", () => {
    assert.strictEqual(typeof asin, "function");
  });

  it("has the expected arity", () => {
    assert.strictEqual(asin.length, 1);
  });

  it("matches Math.asin", () => {
    const native = Math.asin;
    if (typeof native !== "function") {
      return;
    }
    for (const input of cases) {
      const expected = native(input);
      const actual = asin(input);
      assertClose(actual, expected);
    }
  });
});
