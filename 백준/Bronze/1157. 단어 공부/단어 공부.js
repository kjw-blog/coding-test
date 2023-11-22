const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("").map(v => v.toUpperCase());

function solution(item) {
    const obj = {};
    item.forEach(v => obj[v] = (obj[v] || 0) + 1);

    const max = Math.max(...Object.values(obj));
    const result = Object.entries(obj).filter(v => v[1] === max);

    if(result.length === 1) {
        console.log(result[0][0]);
    } else {
        console.log('?');
    }
}

solution(input);