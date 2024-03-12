const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim();
let [a, b] = input.split(' ').map((v) => Number(v));

let arr = [];
let result = new Set();
for (let i = 1; i <= a; i++) {
  arr.push(i);
}
let aa = 0;
while (true) {
  for (let i = b - aa; i <= arr.length; i = i + b) {
    result.add(arr[i - 1]);
    aa = arr.length - i;
  }
  arr = arr.filter((v) => ![...result].includes(v));
  if (arr.length < 3) {
    result.add(arr[0]);
    result.add(arr[1]);
    break;
  }
}

console.log(`<${[...result].join(', ')}>`);
