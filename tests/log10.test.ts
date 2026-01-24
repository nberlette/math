import assert from "node:assert";
import { describe, it } from "node:test";
import { assertClose } from "./internal/_test_utils.ts";
import { log10 } from "./log10.ts";

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

describe("log10", () => {
  it("is a function", () => {
    assert.strictEqual(typeof log10, "function");
  });

  it("has the expected arity", () => {
    assert.strictEqual(log10.length, 1);
  });

  it("matches Math.log10", () => {
    const native = Math.log10;
    if (typeof native !== "function") {
      return;
    }
    for (const input of cases) {
      const expected = native(input);
      const actual = log10(input);
      assertClose(actual, expected);
    }
  });
});
