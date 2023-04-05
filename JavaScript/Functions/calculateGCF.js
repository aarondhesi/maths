/**
 * Calculates the greatest common factor of two positive integers
 * @param {number} num1 a positive integer
 * @param {number} num2 a positer integer
 * @returns {number} greatest common factor
 */


const calculateGCF = (num1, num2) => num2 === 0 ? num1 : calculateGCF(num2, num1 % num2);

export { calculateGCF };