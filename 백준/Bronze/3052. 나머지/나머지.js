let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number).map(v => v%42);

console.log(new Set(input).size)