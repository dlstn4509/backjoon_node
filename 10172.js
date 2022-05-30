const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

console.log(`|\\_/|`);
console.log('|q p|   /}');
console.log(`( 0 )"""\\`);
console.log('|"^"`    |');
console.log(`||_/=\\\\__|`);
