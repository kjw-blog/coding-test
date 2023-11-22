const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

const num = parseInt(input);

for(let i=num-1; i>=0; i--) {
    const star = num-i;
    console.log(`${' '.repeat(i)}${'*'.repeat(star)}`);
}