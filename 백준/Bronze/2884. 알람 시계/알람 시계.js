let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(v => parseInt(v));

let [hours,minutes] = input;
let isOver = minutes < 45;

if(isOver) {
    hours -= 1;
    minutes = minutes+60-45;
} else {
    minutes -= 45;
}

if(hours < 0) {
    hours = 23;
}

console.log(`${hours} ${minutes}`)
