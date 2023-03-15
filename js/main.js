function randomNumberFromInterval(min, max) {
  if (min < 0) {
    throw RangeError("'min' should be greater than or equal to 0")
  } else if (max <= min) {
    throw RangeError("'max' should be strictly greater than 'min'")
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
}


const isStringFitInLength = (string, maxLength) => string.length <= maxLength;
