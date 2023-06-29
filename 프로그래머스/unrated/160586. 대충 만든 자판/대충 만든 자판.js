function solution(keymap, targets) {
    var answer = [];
    
    const result =targets.map(str => {
        const mins =str.split('').map(item => {
            const keys = keymap.map(key => key.indexOf(item) + 1).filter(i => i > 0);   
            return keys.length > 0 ?  Math.min(...keys) : -1
        })
        
        if(mins.includes(-1)) return -1
        
        return mins.reduce((a,b)=>a+b)
    })
    
    return result;
}