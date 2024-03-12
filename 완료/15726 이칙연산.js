const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

let [a, b, c] = input.map((v) => Number(v));

let aa = (a * b) / c;
let bb = (a / b) * c;

console.log(aa > bb ? Math.floor(aa) : Math.floor(bb));
