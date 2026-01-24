import assert from "node:assert";
import { describe, it } from "node:test";
import { assertClose } from "./internal/_test_utils.ts";
import { sin } from "./sin.ts";

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

describe("sin", () => {
  it("is a function", () => {
    assert.strictEqual(typeof sin, "function");
  });

  it("has the expected arity", () => {
    assert.strictEqual(sin.length, 1);
  });

  it("matches Math.sin", () => {
    const native = Math.sin;
    if (typeof native !== "function") {
      return;
    }
    for (const input of cases) {
      const expected = native(input);
      const actual = sin(input);
      assertClose(actual, expected);
    }
  });
});
