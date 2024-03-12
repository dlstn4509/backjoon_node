const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let a = new Set(input[1].split(' '));
let b = new Set(input[2].split(' '));

let cntA = [...a].filter((v) => ![...b].includes(v));
let cntB = [...b].filter((v) => ![...a].includes(v));

console.log(cntA.length + cntB.length);
// console.log(cntB);

// let a = new Set(input[1].split(' '));
// let b = new Set(input[2].split(' '));

// let cntA = 0;
// let cntB = 0;

// for (let v of a) {
//   let bol = true;
//   for (let vv of b) {
//     if (v === vv) {
//       bol = false;
//       break;
//     }
//   }
//   if (bol) {
//     cntA += 1;
//   }
// }

// for (let v of b) {
//   let bol = true;
//   for (let vv of a) {
//     if (v === vv) {
//       bol = false;
//       break;
//     }
//   }
//   if (bol) {
//     cntB += 1;
//   }
// }

// console.log(cntA + cntB);
// console.log(cntB);
