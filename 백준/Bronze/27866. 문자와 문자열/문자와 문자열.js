const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [text,number] = input;

const idx = parseInt(number)-1;

console.log(text[idx]);