import assert from "node:assert";
import { describe, it } from "node:test";
import { assertClose } from "./internal/_test_utils.ts";
import { log2 } from "./log2.ts";

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

describe("log2", () => {
  it("is a function", () => {
    assert.strictEqual(typeof log2, "function");
  });

  it("has the expected arity", () => {
    assert.strictEqual(log2.length, 1);
  });

  it("matches Math.log2", () => {
    const native = Math.log2;
    if (typeof native !== "function") {
      return;
    }
    for (const input of cases) {
      const expected = native(input);
      const actual = log2(input);
      assertClose(actual, expected);
    }
  });
});
