let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(v => parseInt(v));

const [A,B,C] = input;
const result = (A*B*C).toString().split('');

for(let i=0; i<=9; i++) {
    console.log(result.filter(v => v == i).length)
}