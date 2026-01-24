import assert from "node:assert";
import { describe, it } from "node:test";
import { assertClose } from "./internal/_test_utils.ts";
import { acosh } from "./acosh.ts";

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

describe("acosh", () => {
  it("is a function", () => {
    assert.strictEqual(typeof acosh, "function");
  });

  it("has the expected arity", () => {
    assert.strictEqual(acosh.length, 1);
  });

  it("matches Math.acosh", () => {
    const native = Math.acosh;
    if (typeof native !== "function") {
      return;
    }
    for (const input of cases) {
      const expected = native(input);
      const actual = acosh(input);
      assertClose(actual, expected);
    }
  });
});
