const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString();
let chk = input.split('').reverse().join('');

console.log(input === chk ? 1 : 0);
