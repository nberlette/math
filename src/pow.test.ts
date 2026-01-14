import assert from "node:assert";
import { describe, it } from "node:test";
import { assertClose } from "./internal/_test_utils.ts";
import { pow } from "./pow.ts";

const cases: Array<[number, number]> = [
  [2, 3],
  [4, 0.5],
  [-2, 3],
  [-2, 2],
  [2, -1],
  [0, 0],
  [-1, 0.5],
  [NaN, 2],
];

describe("pow", () => {
  it("is a function", () => {
    assert.strictEqual(typeof pow, "function");
  });

  it("has the expected arity", () => {
    assert.strictEqual(pow.length, 2);
  });

  it("matches Math.pow", () => {
    const native = Math.pow;
    for (const [a, b] of cases) {
      const expected = native(a, b);
      const actual = pow(a, b);
      assertClose(actual, expected);
    }
  });
});
