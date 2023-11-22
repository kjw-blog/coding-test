const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const [count,nums] = input;
const data = nums.split('').map(v => parseInt(v));

const result = data.reduce((a,b) => a+b);
console.log(result);
