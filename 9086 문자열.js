const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const count = Number(input[0]);
const wordArr = input
wordArr.shift();

for (let i = 0; i < count; i++) {
  console.log(`${wordArr[i].substring(0, 1)}${wordArr[i].substring(wordArr[i].length - 1, wordArr[i].length)}`);
}

// console.log(wordArr);
