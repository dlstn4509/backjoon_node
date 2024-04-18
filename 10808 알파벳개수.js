const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim()

const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let result = [];

const inputArr = input.split('')

for (let i = 0; i < abc.length; i++) {
  const target = abc[i]
  result.push(inputArr.filter((v) => v === target).length);
}

console.log(result.join(' '))

