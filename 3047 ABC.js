const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let arr = input[0].split(' ').sort((a, b) => a - b);
let obj = { A: arr[0], B: arr[1], C: arr[2] };

let arr2 = input[1].split('');
console.log(`${obj[arr2[0]]} ${obj[arr2[1]]} ${obj[arr2[2]]}`);
