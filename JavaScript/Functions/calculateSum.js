/**
 * Calculates sum of an array of numbers.
 * @param {Array<number>} arr An array of numbers
 * @returns {number} Sum
 */

 const calculateSum = (arr) => arr.reduce((a, b) => a + b, 0);

 export { calculateSum }