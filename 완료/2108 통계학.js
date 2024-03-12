const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();
let obj = {};

let arr = input.map((v) => Number(v)).sort((a, b) => a - b);
for (let v of arr) {
  obj[v] = (obj[v] || 0) + 1;
}
let arr2 = Object.entries(obj).sort((a, b) => a[0] - b[0]);
arr2.sort((a, b) => b[1] - a[1]);

// console.log(arr);
if (Math.round(arr.reduce((a, b) => a + b) / arr.length) === -0) {
  console.log(0);
} else {
  console.log(Math.round(arr.reduce((a, b) => a + b) / arr.length));
}
console.log(arr[Math.round(arr.length / 2) - 1]);

if (arr2.length > 1) {
  if (arr2[0][1] === arr2[1][1]) {
    console.log(arr2[1][0]);
  } else {
    console.log(arr2[0][0]);
  }
} else {
  console.log(arr2[0][0]);
}

if (arr.length > 1) {
  console.log(arr[arr.length - 1] - arr[0]);
} else {
  console.log(0);
}
// console.log(arr2);
