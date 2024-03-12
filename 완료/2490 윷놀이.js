const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

for (let i = 0; i < input.length; i++) {
  let arr = input[i].split(' ').map((v) => Number(v));
  let result = 0;
  for (let v of arr) {
    result += v;
  }
  switch (result) {
    case 0:
      console.log('D');
      break;
    case 1:
      console.log('C');
      break;
    case 2:
      console.log('B');
      break;
    case 3:
      console.log('A');
      break;
    case 4:
      console.log('E');
      break;
  }
}
