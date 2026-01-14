import assert from "node:assert";
import { describe, it } from "node:test";
import { assertClose, assertSameValue } from "./internal/_test_utils.ts";
import { atan2 } from "./atan2.ts";
import { PI } from "./constants/pi.ts";
import { isNegativeZero } from "./guards/negative_zero.ts";

const PI_OVER_2 = PI / 2, PI_OVER_4 = PI / 4;

const cases: [inputs: [number, number], output: number][] = [
  [[0, 1], 0],
  [[0, 0], 0],
  [[-0, 0], -0],
  [[0, -0], PI],
  [[-0, -0], -PI],
  [[1, 0], PI_OVER_2],
  [[-1, -1], -3 * PI_OVER_4],
  [[0, -1], PI],
  [[-0, -1], -PI],
  [[1, -0], PI_OVER_2],
  [[NaN, 1], NaN],
  [[Infinity, 0], PI_OVER_2],
  [[-Infinity, 0], -PI_OVER_2],
  [[0, Infinity], 0],
  [[-0, Infinity], -0],
  [[-0, -Infinity], -PI],
  [[0, -Infinity], PI],
  [[Infinity, Infinity], PI_OVER_4],
  [[-Infinity, Infinity], -PI_OVER_4],
  [[Infinity, -Infinity], 3 * PI_OVER_4],
  [[-Infinity, -Infinity], -3 * PI_OVER_4],
  [[-1, -Infinity], -PI],
  [[1, -Infinity], PI],
];

describe("atan2", () => {
  it("is a function", () => {
    assert.strictEqual(typeof atan2, "function");
  });

  it("has the expected arity", () => {
    assert.strictEqual(atan2.length, 2);
  });

  it("matches Math.atan2", () => {
    const native = Math.atan2;
    for (const [args, expected] of cases) {
      const actual_res = atan2(...args);
      assertSameValue(
        actual_res,
        expected,
        `Expected atan2(${args}) === ${
          isNegativeZero(expected) ? "-0" : expected
        }. Received: ${actual_res}`,
      );
      const native_res = native(...args);
      assertClose(actual_res, native_res);
    }
  });
});
