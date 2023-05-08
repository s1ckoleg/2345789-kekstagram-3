import {randomNumberFromInterval} from './util.js';

const data = [];
const descriptions = [
  'круто',
  'классно',
  'норм',
  'нормас',
  'прикольно',
];

for (let i = 1; i <= 25; i++) {
  data.push({
    id: i,
    url: `photos/${i}.jpg`,
    description: descriptions[randomNumberFromInterval(
        0,
        descriptions.length - 1,
    )],
    likes: randomNumberFromInterval(15, 200),
    comments: randomNumberFromInterval(0, 200),
  });
}

export {data};
