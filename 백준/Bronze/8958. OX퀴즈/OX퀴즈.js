let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [count, ...data] = input;

data.forEach(v => {
    const array = v.split('X').filter(v => v);
    let value = 0;
    
    array.forEach(o => {
        const nums = Array.from({length: o.length}).map((_,i) => i+1);
        value += nums.reduce((a,c) => a+c);
    })
    
    console.log(value);
})