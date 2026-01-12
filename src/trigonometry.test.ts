import { describe, it } from "jsr:@std/testing@1/bdd";
import { expect } from "jsr:@std/expect@1";
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

describe("Math Trigonometric Functions", () => {
  describe("acos", () => {
    it("should return a value close to Math.acos for valid inputs", () => {
      expect(acos(0)).toBeCloseTo(Math.acos(0), 10);
      expect(acos(1)).toBeCloseTo(Math.acos(1), 10);
      expect(acos(-1)).toBeCloseTo(Math.acos(-1), 10);
    });
    it("should return NaN for inputs outside the range [-1, 1]", () => {
      expect(acos(2)).toBeNaN();
      expect(acos(-2)).toBeNaN();
    });
    it("should handle NaN and Infinity inputs", () => {
      expect(acos(NaN)).toBeNaN();
      expect(acos(Infinity)).toBeNaN();
      expect(acos(-Infinity)).toBeNaN();
    });
  });

  describe("asin", () => {
    it("should return a value close to Math.asin for valid inputs", () => {
      expect(asin(0)).toBeCloseTo(Math.asin(0), 10);
      expect(asin(1)).toBeCloseTo(Math.asin(1), 10);
      expect(asin(-1)).toBeCloseTo(Math.asin(-1), 10);
    });
    it("should return NaN for inputs outside the range [-1, 1]", () => {
      expect(asin(2)).toBeNaN();
      expect(asin(-2)).toBeNaN();
    });
    it("should handle NaN and Infinity inputs", () => {
      expect(asin(NaN)).toBeNaN();
      expect(asin(Infinity)).toBeNaN();
      expect(asin(-Infinity)).toBeNaN();
    });
  });

  describe("atan", () => {
    it("should return a value close to Math.atan for valid inputs", () => {
      expect(atan(0)).toBeCloseTo(Math.atan(0), 10);
      expect(atan(1)).toBeCloseTo(Math.atan(1), 10);
      expect(atan(-1)).toBeCloseTo(Math.atan(-1), 10);
    });
    it("should return ±π/2 for Infinity and -Infinity inputs", () => {
      expect(atan(Infinity)).toBeCloseTo(Math.atan(Infinity), 10);
      expect(atan(-Infinity)).toBeCloseTo(Math.atan(-Infinity), 10);
    });
    it("should handle NaN and -0", () => {
      expect(atan(NaN)).toBeNaN();
      expect(atan(-0)).toBe(-0);
    });
  });

  describe("atan2", () => {
    it("should return a value close to Math.atan2 for valid inputs", () => {
      expect(atan2(1, 1)).toBeCloseTo(Math.atan2(1, 1), 10);
      expect(atan2(-1, -1)).toBeCloseTo(Math.atan2(-1, -1), 10);
    });
    it("should handle cases with 0 and -0 as inputs", () => {
      expect(atan2(0, 1)).toBeCloseTo(Math.atan2(0, 1), 10);
      expect(atan2(0, -1)).toBeCloseTo(Math.atan2(0, -1), 10);
      expect(atan2(-0, -1)).toBeCloseTo(Math.atan2(-0, -1), 10);
    });
    it("should handle Infinity, -Infinity, and NaN inputs", () => {
      expect(atan2(Infinity, Infinity)).toBeCloseTo(
        Math.atan2(Infinity, Infinity),
        10,
      );
      expect(atan2(-Infinity, -Infinity)).toBeCloseTo(
        Math.atan2(-Infinity, -Infinity),
        10,
      );
      expect(atan2(NaN, 1)).toBeNaN();
      expect(atan2(1, NaN)).toBeNaN();
    });
  });

  describe("acosh", () => {
    it("should return a value close to Math.acosh for valid inputs", () => {
      expect(acosh(1)).toBeCloseTo(Math.acosh(1), 10);
      expect(acosh(2)).toBeCloseTo(Math.acosh(2), 10);
    });
    it("should return Infinity for Infinity input", () => {
      expect(acosh(Infinity)).toBe(Infinity);
    });
    it("should return NaN for inputs less than 1 and NaN", () => {
      expect(acosh(0)).toBeNaN();
      expect(acosh(-1)).toBeNaN();
      expect(acosh(NaN)).toBeNaN();
    });
  });

  describe("asinh", () => {
    it("should return a value close to Math.asinh for valid inputs", () => {
      expect(asinh(0)).toBeCloseTo(Math.asinh(0), 10);
      expect(asinh(1)).toBeCloseTo(Math.asinh(1), 10);
      expect(asinh(-1)).toBeCloseTo(Math.asinh(-1), 10);
    });
    it("should return Infinity for Infinity input", () => {
      expect(asinh(Infinity)).toBe(Infinity);
      expect(asinh(-Infinity)).toBe(-Infinity);
    });
    it("should return NaN for NaN input", () => {
      expect(asinh(NaN)).toBeNaN();
    });
  });

  describe("atanh", () => {
    it("should return a value close to Math.atanh for values in the range (-1, 1)", () => {
      expect(atanh(0)).toBeCloseTo(Math.atanh(0), 10);
      expect(atanh(0.5)).toBeCloseTo(Math.atanh(0.5), 10);
      expect(atanh(-0.5)).toBeCloseTo(Math.atanh(-0.5), 10);
    });
    it("should return ±Infinity for inputs ±1", () => {
      expect(atanh(1)).toBe(Infinity);
      expect(atanh(-1)).toBe(-Infinity);
    });
    it("should return NaN for inputs outside (-1, 1) and for NaN", () => {
      expect(atanh(2)).toBeNaN();
      expect(atanh(-2)).toBeNaN();
      expect(atanh(NaN)).toBeNaN();
    });
  });

  describe("cos", () => {
    it("should return a value close to Math.cos for valid inputs", () => {
      expect(cos(0)).toBeCloseTo(Math.cos(0), 10);
      expect(cos(Math.PI / 2)).toBeCloseTo(Math.cos(Math.PI / 2), 10);
      expect(cos(Math.PI)).toBeCloseTo(Math.cos(Math.PI), 10);
    });
    it("should return NaN for Infinity, -Infinity, and NaN", () => {
      expect(cos(Infinity)).toBeNaN();
      expect(cos(-Infinity)).toBeNaN();
      expect(cos(NaN)).toBeNaN();
    });
  });

  describe("sin", () => {
    it("should return a value close to Math.sin for valid inputs", () => {
      expect(sin(0)).toBeCloseTo(Math.sin(0), 10);
      expect(sin(Math.PI / 2)).toBeCloseTo(Math.sin(Math.PI / 2), 10);
      expect(sin(Math.PI)).toBeCloseTo(Math.sin(Math.PI), 10);
    });
    it("should return NaN for Infinity, -Infinity, and NaN", () => {
      expect(sin(Infinity)).toBeNaN();
      expect(sin(-Infinity)).toBeNaN();
      expect(sin(NaN)).toBeNaN();
    });
  });

  describe("tan", () => {
    it("should return a value close to Math.tan for valid inputs", () => {
      expect(tan(0)).toBeCloseTo(Math.tan(0), 10);
      expect(tan(Math.PI / 4)).toBeCloseTo(Math.tan(Math.PI / 4), 10);
      expect(tan(-Math.PI / 4)).toBeCloseTo(Math.tan(-Math.PI / 4), 10);
    });
    it("should return NaN for Infinity, -Infinity, and NaN", () => {
      expect(tan(Infinity)).toBeNaN();
      expect(tan(-Infinity)).toBeNaN();
      expect(tan(NaN)).toBeNaN();
    });
  });

  describe("tanh", () => {
    it("should return a value close to Math.tanh for valid inputs", () => {
      expect(tanh(0)).toBeCloseTo(Math.tanh(0), 10);
      expect(tanh(1)).toBeCloseTo(Math.tanh(1), 10);
      expect(tanh(-1)).toBeCloseTo(Math.tanh(-1), 10);
    });
    it("should return ±1 for ±Infinity inputs", () => {
      expect(tanh(Infinity)).toBeCloseTo(Math.tanh(Infinity), 10);
      expect(tanh(-Infinity)).toBeCloseTo(Math.tanh(-Infinity), 10);
    });
    it("should return NaN for NaN input", () => {
      expect(tanh(NaN)).toBeNaN();
    });
  });
});
