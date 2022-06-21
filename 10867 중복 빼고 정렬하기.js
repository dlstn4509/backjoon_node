const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let arr = new Set(input[1].split(' '));

console.log([...arr].sort((a, b) => a - b).join(' '));
