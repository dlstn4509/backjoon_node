const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let cnt = 0;

while (true) {
  let [a, b] = input[cnt].split(' ').map((v) => Number(v));
  if (a === 0 && b === 0) {
    break;
  }

  if (b % a === 0) {
    console.log('factor');
  } else if (a % b === 0) {
    console.log('multiple');
  } else {
    console.log('neither');
  }

  cnt += 1;
}

// for (let i = 0; i < input.length - 1; i++) {
//   let [a, b] = input[i].split(' ').map((v) => Number(v));
//   if (b % a === 0) {
//     console.log('factor');
//   } else if (a % b === 0) {
//     console.log('multiple');
//   } else {
//     console.log('neither');
//   }
// }
