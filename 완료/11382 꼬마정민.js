const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim();
const inputArr = input.split(' ')
const result = inputArr.reduce((acc, cur) => Number(acc) + Number(cur), 0);

console.log(result);
