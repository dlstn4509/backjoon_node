const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => BigInt(v));

let result = [0, 0, 0];

// for (let i = 1; i <= input[0]; i++) {
//   result[0] += input[i];
// }
// for (let i = 2 + input[0]; i <= 1 + input[0] + input[1 + input[0]]; i++) {
//   result[1] += input[i];
// }
for (let i = BigInt(3) + input[0] + input[1 + input[0]]; i < input.length; i++) {
  // console.log(Number(BigInt(input[i])).toString());
  result[2] += BigInt(input[i]);
}

// console.log(result);
for (let v of result) {
  console.log(v === 0 ? 0 : v > 0 ? '+' : '-');
}
