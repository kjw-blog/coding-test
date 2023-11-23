let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.pop();

input.forEach(v => {
    let half = v.length / 2;
    let data = v.split('')
    
    const f = data.slice(0,half).join('');
    const b = data.slice(half + (v.length%2)).reverse().join('');

    if(f === b) {
        console.log('yes');
    } else {
        console.log('no');
    }
})