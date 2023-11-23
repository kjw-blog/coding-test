let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [count, ...data] = input;

const array = Array.from(new Set(data));

array.sort((a,b) => {
    if(a.length === b.length) {
        const arr = [a,b];
        const sort = [...arr].sort()

       if(arr.join('') === sort.join('')) {
           return -1
       } else {
           return 1
       }
    } else {
        return a.length - b.length;
    }
})

array.forEach(v => console.log(v))