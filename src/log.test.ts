import assert from "node:assert";
import { describe, it } from "node:test";
import { assertClose } from "./internal/_test_utils.ts";
import { log } from "./log.ts";

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

describe("log", () => {
  it("is a function", () => {
    assert.strictEqual(typeof log, "function");
  });

  it("has the expected arity", () => {
    assert.strictEqual(log.length, 1);
  });

  it("matches Math.log", () => {
    const native = Math.log;
    if (typeof native !== "function") {
      return;
    }
    for (const input of cases) {
      const expected = native(input);
      const actual = log(input);
      assertClose(actual, expected);
    }
  });
});
