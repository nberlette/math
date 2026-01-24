// deno-lint-ignore-file ban-types
import { abs } from "../src/abs.ts";
import { acos } from "../src/acos.ts";
import { acosh } from "../src/acosh.ts";
import { asin } from "../src/asin.ts";
import { asinh } from "../src/asinh.ts";
import { atan } from "../src/atan.ts";
import { atan2 } from "../src/atan2.ts";
import { atanh } from "../src/atanh.ts";
import { cbrt } from "../src/cbrt.ts";
import { ceil } from "../src/ceil.ts";
import { clz32 } from "../src/clz32.ts";
import { cos } from "../src/cos.ts";
import { cosh } from "../src/cosh.ts";
import { exp } from "../src/exp.ts";
import { expm1 } from "../src/expm1.ts";
import { floor } from "../src/floor.ts";
import { fround } from "../src/fround.ts";
import { hypot } from "../src/hypot.ts";
import { imul } from "../src/imul.ts";
import { log } from "../src/log.ts";
import { log1p } from "../src/log1p.ts";
import { log2 } from "../src/log2.ts";
import { log10 } from "../src/log10.ts";
import { max } from "../src/max.ts";
import { min } from "../src/min.ts";
import { pow } from "../src/pow.ts";
import { random } from "../src/random.ts";
import { round } from "../src/round.ts";
import { sign } from "../src/sign.ts";
import { sin } from "../src/sin.ts";
import { sinh } from "../src/sinh.ts";
import { sqrt } from "../src/sqrt.ts";
import { tan } from "../src/tan.ts";
import { tanh } from "../src/tanh.ts";
import { trunc } from "../src/trunc.ts";

const absInputs = [-1000, -10.5, -1, -0, 0, 1, 10.5, 1000];
const acosInputs = [-1, -0.75, -0.5, 0, 0.5, 0.75, 1];
const acoshInputs = [1, 1.001, 1.5, 2, 10, 100];
const asinInputs = [-1, -0.75, -0.5, 0, 0.5, 0.75, 1];
const asinhInputs = [-10, -1, -0.5, 0, 0.5, 1, 10];
const atanInputs = [-10, -1, -0.5, 0, 0.5, 1, 10];
const atanhInputs = [-0.99, -0.5, -0.1, 0, 0.1, 0.5, 0.99];
const atan2Pairs: Array<[number, number]> = [
  [-1, -1],
  [-1, 1],
  [1, -1],
  [1, 1],
  [0.5, 2],
  [2, 0.5],
];
const cbrtInputs = [-1000, -27, -8, -1, 0, 1, 8, 27, 1000];
const ceilInputs = [-10.9, -1.1, -0.5, 0, 0.5, 1.1, 10.9];
const floorInputs = [-10.9, -1.1, -0.5, 0, 0.5, 1.1, 10.9];
const roundInputs = [-10.9, -1.5, -1.1, -0.5, 0, 0.5, 1.1, 1.5, 10.9];
const truncInputs = [-10.9, -1.5, -1.1, -0.5, 0, 0.5, 1.1, 1.5, 10.9];
const clz32Inputs = [0, 1, 2, 3, 4, 8, 16, 1024, 0x7fffffff, 0xffffffff];
const cosInputs = [
  -Math.PI,
  -Math.PI / 2,
  -1,
  -0.5,
  0,
  0.5,
  1,
  Math.PI / 2,
  Math.PI,
];
const coshInputs = [0, 0.5, 1, 2, 3, 4];
const expInputs = [-5, -1, -0.5, 0, 0.5, 1, 2, 5];
const expm1Inputs = [-1, -0.5, -0.1, 0, 0.1, 0.5, 1];
const froundInputs = [0, 0.1, -0.1, 1 / 3, Math.PI, -Math.E, 1e10, -1e-10];
const hypotSets: number[][] = [
  [3, 4],
  [5, 12],
  [1, 2, 3],
  [0.5, 2.5, 7.75],
  [-3, -4],
  [1, 1, 1, 1, 1],
];
const imulPairs: Array<[number, number]> = [
  [0, 0],
  [1, 2],
  [-1, 2],
  [12345, 6789],
  [-12345, 6789],
  [0x7fffffff, 0xffff],
];
const logInputs = [0.1, 0.5, 1, 2, 10, 100, Math.E, Math.PI];
const log1pInputs = [-0.9, -0.5, -0.1, 0, 0.1, 0.5, 1, 10];
const log2Inputs = [0.125, 0.5, 1, 2, 4, 8, 16, 128, 1024];
const log10Inputs = [0.1, 0.5, 1, 2, 10, 100, 1000, 1e6];
const maxMinSets: number[][] = [
  [-1, 0, 1],
  [3, 5, 2, 9],
  [-10, -5, -1],
  [1.5, 2.5, 3.5, 4.5],
  [Number.MIN_SAFE_INTEGER, 0, Number.MAX_SAFE_INTEGER],
];
const powPairs: Array<[number, number]> = [
  [2, 3],
  [10, 2],
  [2, -2],
  [Math.E, Math.PI],
  [0.5, 3],
  [9, 0.5],
];
const signInputs = [-10, -1, -0, 0, 0.1, 1, 10];
const sinInputs = cosInputs;
const sinhInputs = [-3, -1, -0.5, 0, 0.5, 1, 3];
const sqrtInputs = [0, 0.25, 0.5, 1, 2, 10, 100, 1000];
const tanInputs = [-1, -0.5, -0.25, 0, 0.25, 0.5, 1];
const tanhInputs = [-3, -1, -0.5, 0, 0.5, 1, 3];

type FunctionKeys<T> = keyof {
  [K in keyof T as T[K] extends Function ? K : never]: 0;
};

function bench<
  K extends FunctionKeys<Math>,
  F extends Math[K],
  P extends Parameters<F>,
>(name: K, nativeFn: F, libFn: F, sets: (P extends [number] ? number : P)[]) {
  Deno.bench({ name: `Math.${name}`, group: name }, () => {
    let sum = 0;
    for (let i = 0; i < sets.length; i++) {
      sum += Reflect.apply(nativeFn, null!, ([] as any[]).concat(sets[i]));
    }
    if (Number.isNaN(sum)) throw new Error("sum is NaN");
  });

  Deno.bench(
    { name: `@nick/math.${name}`, group: name, baseline: true },
    () => {
      let sum = 0;
      for (let i = 0; i < sets.length; i++) {
        sum += Reflect.apply(libFn, null!, ([] as any[]).concat(sets[i]));
      }
      if (Number.isNaN(sum)) throw new Error("sum is NaN");
    },
  );
}

bench("abs", Math.abs, abs, absInputs);
bench("acos", Math.acos, acos, acosInputs);
bench("acosh", Math.acosh, acosh, acoshInputs);
bench("asin", Math.asin, asin, asinInputs);
bench("asinh", Math.asinh, asinh, asinhInputs);
bench("atan", Math.atan, atan, atanInputs);
bench("atanh", Math.atanh, atanh, atanhInputs);
bench("atan2", Math.atan2, atan2, atan2Pairs);
bench("cbrt", Math.cbrt, cbrt, cbrtInputs);
bench("ceil", Math.ceil, ceil, ceilInputs);
bench("clz32", Math.clz32, clz32, clz32Inputs);
bench("cos", Math.cos, cos, cosInputs);
bench("cosh", Math.cosh, cosh, coshInputs);
bench("exp", Math.exp, exp, expInputs);
bench("expm1", Math.expm1, expm1, expm1Inputs);
bench("floor", Math.floor, floor, floorInputs);
bench("fround", Math.fround, fround, froundInputs);
bench("hypot", Math.hypot, hypot, hypotSets);
bench("imul", Math.imul, imul, imulPairs);
bench("log", Math.log, log, logInputs);
bench("log1p", Math.log1p, log1p, log1pInputs);
bench("log2", Math.log2, log2, log2Inputs);
bench("log10", Math.log10, log10, log10Inputs);
bench("max", Math.max, max, maxMinSets);
bench("min", Math.min, min, maxMinSets);
bench("pow", Math.pow, pow, powPairs);
bench("random", Math.random, random, Array.from({ length: 1024 }, () => []));
bench("round", Math.round, round, roundInputs);
bench("sign", Math.sign, sign, signInputs);
bench("sin", Math.sin, sin, sinInputs);
bench("sinh", Math.sinh, sinh, sinhInputs);
bench("sqrt", Math.sqrt, sqrt, sqrtInputs);
bench("tan", Math.tan, tan, tanInputs);
bench("tanh", Math.tanh, tanh, tanhInputs);
bench("trunc", Math.trunc, trunc, truncInputs);
