import assert from "node:assert";
import { describe, it } from "node:test";
import { assertClose } from "./internal/_test_utils.ts";
import { log1p } from "./log1p.ts";

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

describe("log1p", () => {
  it("is a function", () => {
    assert.strictEqual(typeof log1p, "function");
  });

  it("has the expected arity", () => {
    assert.strictEqual(log1p.length, 1);
  });

  it("matches Math.log1p", () => {
    const native = Math.log1p;
    if (typeof native !== "function") {
      return;
    }
    for (const input of cases) {
      const expected = native(input);
      const actual = log1p(input);
      assertClose(actual, expected);
    }
  });
});
