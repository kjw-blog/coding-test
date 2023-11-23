let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim()

let num = parseInt(input);
let now = 666;
let cnt = 0;

while(true) {
    if(now.toString().includes('666')) {
        cnt++;
    }
    
    if(cnt === num) {
        break;
    }
    
    now++
}

console.log(now);
