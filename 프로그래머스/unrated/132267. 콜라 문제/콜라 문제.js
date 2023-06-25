function solution(a, b, n) {
    let bottle = n
    let result = 0;
        
    
    while(bottle > b) {
        const receive = Math.floor(bottle/a);
        if(!receive) break;
        
        const etc = bottle - (receive * a);
        
        result += receive * b;
        bottle = etc + (receive * b)
    }
    
    
    return result;
}

console.log(solution(3,2,20))