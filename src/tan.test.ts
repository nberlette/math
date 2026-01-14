import assert from "node:assert";
import { describe, it } from "node:test";
import { assertClose } from "./internal/_test_utils.ts";
import { tan } from "./tan.ts";

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

describe("tan", () => {
  it("is a function", () => {
    assert.strictEqual(typeof tan, "function");
  });

  it("has the expected arity", () => {
    assert.strictEqual(tan.length, 1);
  });

  it("matches Math.tan", () => {
    const native = Math.tan;
    if (typeof native !== "function") {
      return;
    }
    for (const input of cases) {
      const expected = native(input);
      const actual = tan(input);
      assertClose(actual, expected);
    }
  });
});
