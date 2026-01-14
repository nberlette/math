import assert from "node:assert";
import { describe, it } from "node:test";
import { assertClose } from "./internal/_test_utils.ts";
import { acos } from "./acos.ts";

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

describe("acos", () => {
  it("is a function", () => {
    assert.strictEqual(typeof acos, "function");
  });

  it("has the expected arity", () => {
    assert.strictEqual(acos.length, 1);
  });

  it("matches Math.acos", () => {
    const native = Math.acos;
    if (typeof native !== "function") {
      return;
    }
    for (const input of cases) {
      const expected = native(input);
      const actual = acos(input);
      assertClose(actual, expected);
    }
  });
});
