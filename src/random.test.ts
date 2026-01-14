import assert from "node:assert";
import { describe, it } from "node:test";
import { MT19937, random } from "./random.ts";

const seed = 42;

describe("random", () => {
  it("is a function", () => {
    assert.strictEqual(typeof random, "function");
  });

  it("is named 'random'", () => {
    assert.strictEqual(random.name, "random");
  });

  it("has an arity of 0", () => {
    assert.strictEqual(random.length, 0);
  });

  it("returns a number", () => {
    assert.strictEqual(typeof random(), "number");
  });

  it("returns numbers in [0, 1)", () => {
    for (let i = 0; i < 50; i++) {
      const value = random();
      assert.ok(value >= 0 && value < 1);
    }
  });

  it("supports seeding", () => {
    assert.strictEqual(typeof random.init, "function");
    random.init(seed);
    assert.strictEqual(random(), 0.37454011430963874);
  });
});

describe("MT19937", () => {
  const mt19937 = new MT19937();

  it("is an object-like value", () => {
    assert.ok(
      mt19937 != null &&
        (typeof mt19937 === "object" || typeof mt19937 === "function"),
    );
  });

  it("has a method named random", () => {
    assert.ok(mt19937.random != null && typeof mt19937.random === "function");
  });

  it("has a method named init", () => {
    assert.ok(mt19937.init != null && typeof mt19937.init === "function");
  });

  it("has a method named randomInt", () => {
    assert.ok(
      mt19937.randomInt != null && typeof mt19937.randomInt === "function",
    );
  });

  it("generates a number in [0, 1)", () => {
    const result = mt19937.random();
    assert.ok(result >= 0 && result < 1);
  });

  it("produces the same sequence for the same seed", () => {
    mt19937.init(5489);
    const expected = [
      0.8147236919030547,
      0.13547700410708785,
      0.9057919341139495,
      0.8350085897836834,
      0.12698681186884642,
    ];
    const actual = Array.from(
      { length: expected.length },
      () => mt19937.random(),
    );
    assert.deepStrictEqual(actual, expected);
  });
});
