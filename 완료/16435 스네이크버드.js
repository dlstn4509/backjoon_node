const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let length = Number(input[0].split(' ')[1]);
let fr = input[1]
  .split(' ')
  .map((v) => Number(v))
  .sort((a, b) => a - b);

while (true) {
  length += 1;
  fr.shift();
  if (Number(fr[0]) > length || fr.length === 0) {
    break;
  }
}

console.log(length);
