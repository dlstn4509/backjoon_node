const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const word = input[0]
const cnt = input[1]
console.log(word.substring(cnt-1, cnt))
