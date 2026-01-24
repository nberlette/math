import assert from "node:assert";
import { describe, it } from "node:test";
import { assertClose } from "./internal/_test_utils.ts";
import { cbrt } from "./cbrt.ts";

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

describe("cbrt", () => {
  it("is a function", () => {
    assert.strictEqual(typeof cbrt, "function");
  });

  it("has the expected arity", () => {
    assert.strictEqual(cbrt.length, 1);
  });

  it("matches Math.cbrt", () => {
    const native = Math.cbrt;
    if (typeof native !== "function") {
      return;
    }
    for (const input of cases) {
      const expected = native(input);
      const actual = cbrt(input);
      assertClose(actual, expected);
    }
  });
});
