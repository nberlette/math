import assert from "node:assert";
import { describe, it } from "node:test";
import { assertSameValue } from "./internal/_test_utils.ts";
import { imul } from "./imul.ts";

const cases: Array<[number, number]> = [[2, 3], [-1, 8], [4294967295, 5], [
  0,
  123,
], [3.5, 2]];

describe("imul", () => {
  it("is a function", () => {
    assert.strictEqual(typeof imul, "function");
  });

  it("has the expected arity", () => {
    assert.strictEqual(imul.length, 2);
  });

  it("matches Math.imul", () => {
    const native = Math.imul;
    for (const [a, b] of cases) {
      const expected = native(a, b);
      const actual = imul(a, b);
      assertSameValue(actual, expected);
    }
  });
});
