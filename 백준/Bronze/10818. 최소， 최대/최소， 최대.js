const [count,input] = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let data = input.split(' ').map(v => parseInt(v));

console.log(`${Math.min(...data)} ${Math.max(...data)}`)