const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let result = new Set();

for (let i = 1; i <= Number(input[0]); i++) {
  let [a, b] = input[i].split(' ');
  if (b === 'enter') {
    result.add(a);
  } else {
    // let aa = result.filter((v) => v !== a);
    // result = aa;
    result.delete(a);
  }
}
// console.log(result);
let aa = Array.from(result);
aa.sort().reverse().join('');
console.log(aa.join('\n'));
