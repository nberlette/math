import assert from "node:assert";
import { describe, it } from "node:test";
import { assertClose } from "./internal/_test_utils.ts";
import { sqrt } from "./sqrt.ts";

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

describe("sqrt", () => {
  it("is a function", () => {
    assert.strictEqual(typeof sqrt, "function");
  });

  it("has the expected arity", () => {
    assert.strictEqual(sqrt.length, 1);
  });

  it("matches Math.sqrt", () => {
    const native = Math.sqrt;
    if (typeof native !== "function") {
      return;
    }
    for (const input of cases) {
      const expected = native(input);
      const actual = sqrt(input);
      assertClose(actual, expected);
    }
  });
});
