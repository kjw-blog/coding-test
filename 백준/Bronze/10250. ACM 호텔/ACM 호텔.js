let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [count, ...data] = input;

data.forEach(v => {
    let [height, width, people] = v.split(' ').map(Number);
    
    let floor = people % height === 0 ? height : people % height;
    
    let room = Math.ceil(people/height);
    
    room = room > 9 ? room : '0'+room;
    
    console.log(`${floor}${room}`)
})

