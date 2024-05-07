const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const a = BigInt(input[0]);
const b = BigInt(input[1]);

console.log((a + b).toString());
console.log((a - b).toString());
console.log((a * b).toString());
