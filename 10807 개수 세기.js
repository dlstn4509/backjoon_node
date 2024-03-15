const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const findWord = input[2]

const result = input[1].split(' ').filter((v) => v === findWord)

console.log(result.length);
