const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let aa = input[0].split(' '); // 6 4 2
let arr = input[0].split(' ').sort(); // 2 4 6
let arr2 = input[1].split('').sort(); // A B C
let input1 = input[1].split(''); // C A B
let result = [];

for (let v of input1) {
  for (let i = 0; i < arr2.length; i++) {
    if (v === arr2[i]) {
      result.push(arr[i]);
    }
  }
}

// for (let v of arr2) {
//   for (let i = 0; i < input1.length; i++) {
//     if (v === input1[i]) {
//       console.log(i);
//       result.push(aa[i]);
//     }
//   }
// }

console.log(result.join(' '));
