const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

let [a, b, c] = input.map((v) => Number(v));

let arr = [a, b, c].sort((a, b) => b - a);
console.log(arr[1]);
