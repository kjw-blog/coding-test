let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let numbers = input.map(v => Number(v));
let max = Math.max(...numbers);

console.log(max);
console.log(numbers.findIndex(v => v === max)+1);