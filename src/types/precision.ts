/**
 * This module provides type aliases for various levels of precision, for use
 * with floating-point or integer numbers.
 *
 * @module precision
 */

/**
 * Represents 8 bits of precision.
 * @category Types
 * @tags Precision
 */
export type P8 = 8;

/**
 * Represents 16 bits of precision.
 * @category Types
 * @tags Precision
 */
export type P16 = 16;

/**
 * Represents 32 bits of precision.
 * @category Types
 * @tags Precision
 */
export type P32 = 32;

/**
 * Represents 64 bits of precision.
 * @category Types
 * @tags Precision
 */
export type P64 = 64;

/**
 * Represents 8, 16, 32, or 64 bits of precision. For floating point or integer
 * numbers.
 *
 * @category Types
 * @tags Precision
 */
export type Precision = P8 | P16 | P32 | P64;

/**
 * Represents 16, 32, or 64 bits of precision for floating-point numbers.
 *
 * @category Types
 * @tags Precision
 */
export type FloatPrecision = P16 | P32 | P64;
