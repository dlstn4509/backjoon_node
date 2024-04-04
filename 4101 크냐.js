const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

for (let i = 0; i < input.length; i++) {
  const arr = input[i].split(' ').map((v) => Number(v))
  if (arr[0] === 0 && arr[1] === 0) break;
  if (arr[0] > arr[1]) {
    console.log('Yes')
  } else {
    console.log('No')
  }
}