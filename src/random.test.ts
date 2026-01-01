import { describe, it } from "@std/testing/bdd";
import { assert, assertEquals } from "@std/assert";
import { expect } from "@std/expect";
import { MT19937, random } from "./random.ts";

describe("random", () => {
  it("is a function", () => {
    expect(typeof random).toBe("function");
  });

  it("is named 'random'", () => {
    expect(random.name).toBe("random");
  });

  it("has an arity of 0", () => {
    expect(random.length).toBe(0);
  });

  it("should return a number", () => {
    expect(typeof random()).toBe("number");
  });

  it("should always return a number between [0, 1)", () => {
    let last;
    for (let i = 0; i < 100; i++) {
      const value = random();
      expect(value).toBeGreaterThanOrEqual(0);
      expect(value).toBeLessThan(1);
      expect(!last || last !== value, `${i}. ${value} should be !== ${last}`)
        .toBe(true);
      last = value;
    }
  });

  it("should support seeding", () => {
    expect(typeof random.init).toBe("function");
    random.init(42);
    expect(random()).toBe(0.37454011430963874);
  });
});

describe("MT19937", () => {
  const mt19937 = new MT19937();

  it("is an object-like value", () => {
    assert(
      mt19937 != null && typeof mt19937 === "object" ||
        typeof mt19937 === "function",
    );
  });
  it("has a method named random", () => {
    assert(mt19937.random != null && typeof mt19937.random === "function");
  });
  it("has a method named init", () => {
    assert(mt19937.init != null && typeof mt19937.init === "function");
  });
  it("has a method named randomInt", () => {
    assert(
      mt19937.randomInt != null && typeof mt19937.randomInt === "function",
    );
  });
  it("generates a random number on [0, 1)-real-interval", () => {
    const result = mt19937.random();
    assert(result >= 0 && result < 1);
  });
  it("produces the same sequence given the same seed", () => {
    const seed = 5489;
    mt19937.init(seed);
    const expected = [
      0.8147236919030547,
      0.13547700410708785,
      0.9057919341139495,
      0.8350085897836834,
      0.12698681186884642,
      0.9688677710946649,
      0.9133758556563407,
      0.22103404277004302,
      0.6323592499829829,
      0.30816705035977066,
      0.09754040162079036,
      0.5472205963451415,
      0.2784982183948159,
      0.1883819759823382,
      0.5468815190251917,
      0.9928813017904758,
      0.9575068296398968,
      0.9964613253250718,
      0.9648885338101536,
      0.967694936785847,
      0.15761307650245726,
      0.7258389631751925,
      0.9705927788745612,
      0.9811096915509552,
      0.9571669497527182,
      0.10986175062134862,
      0.4853756483644247,
      0.7981058566365391,
      0.8002804731950164,
      0.297029449371621,
      0.14188634511083364,
      0.004783484386280179,
      0.4217612857464701,
      0.11246451595798135,
      0.9157355236820877,
      0.6397633568849415,
      0.792207325110212,
      0.8784306452143937,
      0.9594924252014607,
      0.5036626774817705,
      0.6557406960055232,
      0.7979286150075495,
      0.03571167937479913,
      0.3612940013408661,
      0.849129305453971,
      0.21192433219403028,
      0.9339932457078248,
      0.6813595383428037,
      0.6787351581733674,
      0.3987385197542608,
    ];
    const actual = Array.from(
      { length: expected.length },
      () => mt19937.random(),
    );
    assertEquals(actual, expected);
  });
});
