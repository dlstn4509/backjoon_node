const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('');

const abc = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
let cnt = 0;

for (let i = 0; i < input.length; i++) {
  cnt += 1;
  let sumAbc = input[i] + input[i + 1];
  if (sumAbc === 'dz' && abc.includes(sumAbc + input[i + 2])) {
    i = i + 2;
  } else if (abc.includes(sumAbc)) {
    i = i + 1;
  }
}

console.log(cnt);
