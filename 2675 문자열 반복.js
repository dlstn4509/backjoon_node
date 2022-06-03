const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

for (let i = 1; i <= Number(input[0]); i++) {
  let arr = input[i].split(' ');
  let textArr = arr[1].split('');
  let result = '';
  for (let v of textArr) {
    result += v.repeat(arr[0]);
  }
  console.log(result);
}
