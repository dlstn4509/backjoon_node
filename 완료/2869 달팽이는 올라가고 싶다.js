const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

let day = Number(input[0]);
let night = Number(input[1]);
let height = Number(input[2]);

let result = Math.ceil((height - night) / (day - night));
console.log(result);
