const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let burger = [];
let drink = [];
for (let i = 0; i < 3; i++) {
  burger.push(Number(input[i]));
}
for (let i = 3; i < 5; i++) {
  drink.push(Number(input[i]));
}
console.log(Math.min(...burger) + Math.min(...drink) - 50);
