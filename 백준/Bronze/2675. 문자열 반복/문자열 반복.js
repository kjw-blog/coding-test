let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [T, ...testCases] = input;

for (const testCase of testCases) {
    const [i, str] = testCase.split(' ');
    const iteration = parseInt(i);
    
    const reduced = str.split('').reduce((acc, cur) => {
        acc += Array(iteration).fill(cur).join('');
        return acc;
    }, '');
    
    console.log(reduced);
}