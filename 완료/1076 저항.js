const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let [a, b, c] = input;

let arr = {
  black: ['0', 1],
  brown: ['1', 10],
  red: ['2', 100],
  orange: ['3', 1000],
  yellow: ['4', 10000],
  green: ['5', 100000],
  blue: ['6', 1000000],
  violet: ['7', 10000000],
  grey: ['8', 100000000],
  white: ['9', 1000000000],
};

console.log(Number(arr[a][0] + arr[b][0]) * arr[c][1]);
