/**
 * Calculates product of an array of numbers.
 * @param {Array<number>} arr an array of numbers
 * @returns {number} product
 */

const calculateProduct = (arr) => arr.reduce((a, b) => a * b, 1);

export { calculateProduct };
