let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [f,...line] = input;
let [a,b] = f.split(' ').map(Number);
line = line.map(Number);

let max = Math.max(...line);
let min = 1;

while(min <= max) {
    let mid = ~~((max+min)/2);
    let piece = line.map(v => ~~(v/mid)).reduce((a,b) => a+b);

    if(piece >= b) {
        min = mid + 1;
    } else {
        max = mid - 1
    }
}

console.log(max)