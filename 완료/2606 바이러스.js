const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let result = 0;
let arr = [];

for (let i = 2; i <= Number(input[1]) + 1; i++) {
  let aa = input[i].split(' ');
  arr.push(aa);
  // for (let j = 0; j < arr.length; j++) {
  //   arr[j] === aa[0];
  //   result += 1;
  // }
}
console.log(arr);
let ss = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i][0] === '1') {
    result += 1;
    ss.push(arr[i][1]);
  }
}
console.log(result);
