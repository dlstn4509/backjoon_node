const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let [a, b] = input[0].split(' ').map((v) => Number(v));
let arr = input.slice(0, a + 1);
let arr2 = input.slice(a + 1, a + b + 1);
let mon = new Map(arr.map((v, i) => [v, i]));
let result = [];

arr2.forEach((v) => {
  if (isNaN(v)) {
    // 문자
    result.push(mon.get(v));
  } else {
    // 숫자
    result.push(arr[v]);
  }
});

console.log(result.join('\n'));
