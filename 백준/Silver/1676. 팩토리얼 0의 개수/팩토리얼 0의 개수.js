let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString()
input = parseInt(input);

function factorial(n) {
    return n > 1 ? BigInt(n) * factorial(n-1) : 1n
}

let num = factorial(input).toString().split('')

let zero = 0;
while(true) {
    let isZero = num.pop() === '0';
    
    if(isZero) {
        zero++;
        
        continue;
    }
    
    break;
}

console.log(zero)