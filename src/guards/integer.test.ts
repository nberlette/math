import assert from "node:assert";
import { describe, it } from "node:test";
import { isInteger, isNumberInteger } from "./integer.ts";

const cases: unknown[] = [0, 1, -1, 1.2, -2.5, NaN, Infinity, -Infinity, "3"];

describe("isInteger", () => {
  it("is a function", () => {
    assert.strictEqual(typeof isInteger, "function");
  });

  it("coerces and matches Number.isInteger", () => {
    for (const value of cases) {
      const expected = Number.isInteger(+value);
      assert.strictEqual(isInteger(value as number), expected);
    }
  });
});

describe("isNumberInteger", () => {
  it("is a function", () => {
    assert.strictEqual(typeof isNumberInteger, "function");
  });

  it("matches Number.isInteger for numbers", () => {
    const numericCases = [0, 1, -1, 1.2, -2.5, NaN, Infinity, -Infinity];
    for (const value of numericCases) {
      assert.strictEqual(isNumberInteger(value), Number.isInteger(value));
    }
  });
});
