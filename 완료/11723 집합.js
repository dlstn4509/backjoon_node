const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let result = [];

for (let i = 1; i <= Number(input[0]); i++) {
  let [a, b] = input[i].split(' ');
  if (a === 'add') {
    result.push(b);
  } else if (a === 'remove') {
    result = result.filter((v) => v !== b);
  } else if (a === 'check') {
    console.log(result.includes(b) ? 1 : 0);
  } else if (a === 'toggle') {
    result.includes(b) ? (result = result.filter((v) => v !== b)) : result.push(b);
  } else if (a === 'all') {
    result = [];
    for (let i = 1; i <= 20; i++) {
      result.push(i.toString());
    }
  } else {
    result = [];
  }
}
