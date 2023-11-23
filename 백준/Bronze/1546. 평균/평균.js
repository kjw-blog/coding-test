let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [count, scores] = input;

count = parseInt(count);
scores = scores.split(' ').map(Number);

let max = Math.max(...scores)

scores = scores.map(v => v/max*100);
const avg = scores.reduce((a,b) => a+b,1)/count;

console.log(avg);
