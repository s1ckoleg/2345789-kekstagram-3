/**
 * Returns random number from [min, max] interval
 * @param {number} min Min number
 * @param {number} max Max number
 * @return {number} The random number from the interval
 */
export function randomNumberFromInterval(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

/**
 * Checks if the string fits in maximum length
 * @param {string} string String to check
 * @param {number} maxLength Maximum length of the string
 * @return {boolean} Returns true if string fits and false if not
 */
export const isStringFitInLength = (string, maxLength) =>
  string.length <= maxLength;
