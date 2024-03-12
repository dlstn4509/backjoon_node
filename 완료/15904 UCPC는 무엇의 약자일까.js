const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ').join('').split('');

let ucpcArr = ['U', 'C', 'P', 'C'];
let chk = [];
for (let v of input) {
  if (v === v.toUpperCase()) {
    chk.push(v);
  }
}
// console.log(chk);
let count = 0;
for (let i = 0; i < chk.length; i++) {
  if (chk[i] === ucpcArr[count]) {
    count += 1;
  }
}

console.log(count === 4 ? 'I love UCPC' : 'I hate UCPC');

// console.log(chk.includes('UCPC') ? 'I love UCPC' : 'I hate UCPC');
