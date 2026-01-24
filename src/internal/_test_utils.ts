import assert from "node:assert";

export const DEFAULT_EPSILON = 1e-12;

export function assertSameValue(
  actual: number,
  expected: number,
  message?: string,
): void {
  if (Number.isNaN(expected)) {
    assert.ok(Number.isNaN(actual), message ?? "Expected NaN");
    return;
  }
  if (Object.is(expected, -0)) {
    assert.ok(Object.is(actual, -0), message ?? "Expected -0");
    return;
  }
  assert.strictEqual(actual, expected, message);
}

export function assertClose(
  actual: number,
  expected: number,
  epsilon: number = DEFAULT_EPSILON,
  message?: string,
): void {
  if (Number.isNaN(expected)) {
    assert.ok(Number.isNaN(actual), message ?? "Expected NaN");
    return;
  }
  if (Object.is(expected, -0)) {
    assert.ok(Object.is(actual, -0), message ?? "Expected -0");
    return;
  }
  if (expected === 0) {
    assert.ok(
      Math.abs(actual) <= epsilon,
      message ?? `Expected ${actual} to be within ${epsilon} of 0`,
    );
    assert.ok(
      !Object.is(actual, -0),
      message ?? "Expected +0 (not -0)",
    );
    return;
  }
  if (!Number.isFinite(expected)) {
    assertSameValue(actual, expected, message);
    return;
  }
  const diff = Math.abs(actual - expected);
  const scale = Math.max(1, Math.abs(expected));
  assert.ok(
    diff <= epsilon * scale,
    message ?? `Expected ${actual} to be within ${epsilon} of ${expected}`,
  );
}
