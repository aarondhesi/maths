/**
 * Returns a random integer between min and max inclusive
 * @param {number} min minimum integer value
 * @param {number} max maximum integer value
 * @returns {number} random integer
 */

const getRandInt = (min, max) => {
  const errorStr = "\nmin = " + min + " (" + typeof min + ")\nmax = " + max + " (" + typeof max + ")";

  if (typeof min != "number" || typeof max != "number") {
    console.log("getRandInt - Error: min and max should be numbers." + errorStr);
    return null;
  }
  else if (!Number.isInteger(min) || !Number.isInteger(max)) {
    console.log("getRandInt - Error: min and max should be integers." + errorStr);
    return null;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { getRandInt };