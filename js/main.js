function randomNumberFromInterval(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}


const isStringFitInLength = (string, maxLength) => string.length <= maxLength;


function generateData() {
  let result = [];
  let descriptions = [
    'круто',
    'классно',
    'норм',
    'нормас',
    'прикольно'
  ]

  for (let i = 1; i <= 25; i++) {
    result.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: descriptions[randomNumberFromInterval(0, descriptions.length - 1)],
      likes: randomNumberFromInterval(15, 200),
      comments: randomNumberFromInterval(0, 200)
    })
  }

  return result;
}
