const input = {
    left : -1,
    right: 1,
    up: 1,
    down : -1
}

function solution(keyinput, board) {
    const [w,h] = board.map((item) => Math.floor(item/2))
    let now = [0,0]
    
    keyinput.forEach(move => {
        const flag = ['left','right'].includes(move)
        const length = flag ? w : h;
        const index = flag ? 0 : 1;
        
        const sum = now[index] + input[move];
        
        
        
        if(Math.abs(sum) <= length) {
            now[index] = now[index] + input[move]
        }
    })
    
     return now
}