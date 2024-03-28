const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map((v) => Number(v));

input.shift()

const result = input.sort((a, b) => a - b)

console.log(result.join('\n'));
