const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ').map((v) => Number(v));

console.log(Math.abs(input[1] - input[0]));
