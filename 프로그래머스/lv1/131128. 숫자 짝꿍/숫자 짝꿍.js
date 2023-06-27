function solution(X, Y) {
    let result = {}
    
    for(i=0; i<10; i++) {
        const xl = [...X].filter(item => item === `${i}`).length
        const yl = [...Y].filter(item => item === `${i}`).length
        
        if(xl && yl) {
            result[i] = Math.min(xl,yl)
        }
    }
    
    const keys = Object.keys(result).sort((a,b) => Number(b) - Number(a));
    
    if(!keys.length) return '-1'
    
    let text = keys.reduce((a,b) => a + b.repeat(result[b]), '')
    
    if([...text].every(item => item === '0')) {
        text = '0'
    }
    
    return text
}