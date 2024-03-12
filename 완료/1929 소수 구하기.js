const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');
let [a, b] = input.map((v) => Number(v));
let arr = [false, false];

for (let i = 2; i <= b; i++) {
  arr.push(true);
}

// for (let i = a; i <= b; i++) {
//   let a = true;
//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//       a = false;
//       break;
//     }
//   }
//   if (a && i > 1) {
//     arr.push(i);
//   }
// }

// console.log(arr.join('\n'));
