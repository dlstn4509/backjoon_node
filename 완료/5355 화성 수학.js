const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

for (let i = 1; i <= Number(input[0]); i++) {
  let arr = input[i].split(' ');
  let result = arr[0];
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] === '@') {
      result = result * 3;
    } else if (arr[j] === '%') {
      result = result + 5;
    } else {
      result -= 7;
    }
  }
  console.log(result.toFixed(2));
}
