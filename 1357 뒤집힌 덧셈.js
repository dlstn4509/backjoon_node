const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split(' ');
let [a, b] = input.map((v) => Number(v));

let x = a.toString().split('').reverse().join('');
let y = b.toString().split('').reverse().join('');
let result = (Number(x) + Number(y)).toString().split('').reverse().join('');

console.log(Number(result));
