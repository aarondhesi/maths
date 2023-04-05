/**
 * Calculates mean of an array of numbers.
 * @param {Array<number>} arr An array of numbers
 * @returns {number} nean
 */

const calculateMean = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

export { calculateMean };
