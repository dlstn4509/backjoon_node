const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim();
let num = Number(input);

let arr = [0, 1];

for (let i = 2; i <= num; i++) {
  let sum = BigInt(arr[i - 1]) + BigInt(arr[i - 2]);
  arr.push(sum);
}
console.log(arr[num].toString());
