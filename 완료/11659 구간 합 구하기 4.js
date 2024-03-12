const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [a, b] = input[0].split(' ');
let arr = input[1].split(' ').map((v) => Number(v));

for (let i = b - 1; i < input.length; i++) {
  let asd = input[i].split(' ');
  let result = 0;
  for (let j = asd[0]; j <= asd[1]; j++) {
    result += arr[j - 1];
  }
  console.log(result);
}
