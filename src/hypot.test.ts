import assert from "node:assert";
import { describe, it } from "node:test";
import { assertClose } from "./internal/_test_utils.ts";
import { hypot } from "./hypot.ts";

const cases: Array<number[]> = [[3, 4], [0, 0], [1, 2, 3], [Infinity, 1], [
  NaN,
  1,
], []];

describe("hypot", () => {
  it("is a function", () => {
    assert.strictEqual(typeof hypot, "function");
  });

  it("has the expected arity", () => {
    assert.strictEqual(hypot.length, 0);
  });

  it("matches Math.hypot", () => {
    const native = Math.hypot;
    for (const args of cases) {
      const expected = native(...args);
      const actual = hypot(...args);
      assertClose(actual, expected);
    }
  });
});
