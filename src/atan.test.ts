import assert from "node:assert";
import { describe, it } from "node:test";
import { assertClose } from "./internal/_test_utils.ts";
import { atan } from "./atan.ts";

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

describe("atan", () => {
  it("is a function", () => {
    assert.strictEqual(typeof atan, "function");
  });

  it("has the expected arity", () => {
    assert.strictEqual(atan.length, 1);
  });

  it("matches Math.atan", () => {
    const native = Math.atan;
    if (typeof native !== "function") {
      return;
    }
    for (const input of cases) {
      const expected = native(input);
      const actual = atan(input);
      assertClose(actual, expected);
    }
  });
});
