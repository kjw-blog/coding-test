let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').join('');

const ascending = '12345678';
const descending = '87654321';

if(input === ascending) {
    console.log('ascending')
} else if(input === descending) {
    console.log('descending')
} else {
    console.log('mixed')
}