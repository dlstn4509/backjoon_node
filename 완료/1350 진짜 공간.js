const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let arr = input[1].split(' ').map((v) => Number(v));
let size = Number(input[2]);
let result = 0;
for (let i = 0; i < arr.length; i++) {
  result += Math.ceil(arr[i] / size);
}

console.log(result * size);
