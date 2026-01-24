export const Date: DateConstructor = globalThis.Date;
export const DateNow = Date.now;
export const DateUTC = Date.UTC;
export const DateParse = Date.parse;
export const DatePrototype = Date.prototype;

export const String: StringConstructor = globalThis.String;
export const StringPrototype = String.prototype;

export const Number: NumberConstructor = globalThis.Number;
export const NumberPrototype = Number.prototype;

export const BigInt: BigIntConstructor = globalThis.BigInt;
export const BigIntAsIntN = BigInt.asIntN.bind(BigInt);
export const BigIntAsUintN = BigInt.asUintN.bind(BigInt);
export const BigIntPrototype = BigInt.prototype;

export const Object: ObjectConstructor = globalThis.Object;
export const ObjectPrototype = Object.prototype;

export const Array: ArrayConstructor = globalThis.Array;
export const ArrayFrom: typeof Array.from = Array.from.bind(Array);
export const ArrayPrototype = Array.prototype;

export const Function: FunctionConstructor = globalThis.Function;
export const FunctionPrototype = Function.prototype;

export const Symbol: SymbolConstructor = globalThis.Symbol;
export const SymbolPrototype: typeof Symbol.prototype = Symbol.prototype;
export const SymbolFor: typeof Symbol.for = Symbol.for;
export const SymbolIterator: typeof Symbol.iterator = Symbol.iterator;
export const SymbolToStringTag: typeof Symbol.toStringTag = Symbol.toStringTag;
export const SymbolToPrimitive: typeof Symbol.toPrimitive = Symbol.toPrimitive;
