const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let result = input[1] === '*' ? Number(input[0]) * Number(input[2]) : Number(input[0]) + Number(input[2]);
console.log(result.toString());
// console.log(eval(input[0] + input[1] + input[2]));
