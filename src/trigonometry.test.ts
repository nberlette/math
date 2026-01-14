import assert from "node:assert";
import { describe, it } from "node:test";
import { assertClose } from "./internal/_test_utils.ts";
import {
  acos,
  acosh,
  asin,
  asinh,
  atan,
  atan2,
  atanh,
  cos,
  sin,
  tan,
  tanh,
} from "./index.ts";

const unaryCases = [0, 0.5, -0.5, 1, -1, Math.PI / 2, Math.PI, NaN];

describe("Math trigonometric functions", () => {
  it("acos matches Math.acos", () => {
    for (const value of unaryCases) {
      assertClose(acos(value), Math.acos(value));
    }
  });

  it("asin matches Math.asin", () => {
    for (const value of unaryCases) {
      assertClose(asin(value), Math.asin(value));
    }
  });

  it("atan matches Math.atan", () => {
    for (const value of unaryCases) {
      assertClose(atan(value), Math.atan(value));
    }
  });

  it("atan2 matches Math.atan2", () => {
    const cases: Array<[number, number]> = [
      [0, 1],
      [1, 0],
      [-1, -1],
      [0, -1],
      [-0, -1],
      [1, -0],
      [NaN, 1],
    ];
    for (const [y, x] of cases) {
      assertClose(atan2(y, x), Math.atan2(y, x));
    }
  });

  it("acosh matches Math.acosh", () => {
    const cases = [1, 2, 10, 0.5, -1, NaN, Infinity];
    for (const value of cases) {
      assertClose(acosh(value), Math.acosh(value));
    }
  });

  it("asinh matches Math.asinh", () => {
    const cases = [-2, -1, 0, 1, 2, NaN, Infinity, -Infinity];
    for (const value of cases) {
      assertClose(asinh(value), Math.asinh(value));
    }
  });

  it("atanh matches Math.atanh", () => {
    const cases = [-0.9, -0.5, 0, 0.5, 0.9, 1, -1, 2, NaN];
    for (const value of cases) {
      assertClose(atanh(value), Math.atanh(value));
    }
  });

  it("cos matches Math.cos", () => {
    const cases = [0, Math.PI / 2, Math.PI, -Math.PI, NaN, Infinity];
    for (const value of cases) {
      assertClose(cos(value), Math.cos(value));
    }
  });

  it("sin matches Math.sin", () => {
    const cases = [0, Math.PI / 2, Math.PI, -Math.PI, NaN, Infinity];
    for (const value of cases) {
      assertClose(sin(value), Math.sin(value));
    }
  });

  it("tan matches Math.tan", () => {
    const cases = [0, Math.PI / 4, -Math.PI / 4, 1, NaN, Infinity];
    for (const value of cases) {
      assertClose(tan(value), Math.tan(value));
    }
  });

  it("tanh matches Math.tanh", () => {
    const cases = [-2, -1, 0, 1, 2, Infinity, -Infinity, NaN];
    for (const value of cases) {
      assertClose(tanh(value), Math.tanh(value));
    }
  });
});
