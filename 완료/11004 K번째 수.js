const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let arr = input[1].split(' ').sort((a, b) => a - b);
console.log(arr[input[0].split(' ')[1] - 1]);
