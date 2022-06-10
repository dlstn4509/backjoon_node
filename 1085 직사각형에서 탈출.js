const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

let [x, y, w, h] = input.map((v) => Number(v));
let arr = [x, y];

arr.push(w - x);
arr.push(h - y);

// console.log(Math.min(...arr));
console.log(Math.min(...arr) === 0 ? 1 : Math.min(...arr));
