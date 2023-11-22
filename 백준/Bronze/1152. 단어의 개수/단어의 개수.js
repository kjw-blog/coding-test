let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const data = input.filter(v => v);

console.log(data.length);