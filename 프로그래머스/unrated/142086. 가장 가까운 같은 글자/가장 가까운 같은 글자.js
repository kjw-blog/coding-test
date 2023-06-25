function solution(s) {
    const items = [...s]
    
    const answer = items.map((item,i) => {
        const slice = items.slice(0,i);
        const lastIndex = slice.lastIndexOf(item)
        
        return lastIndex < 0 ? lastIndex : Math.abs(lastIndex-i);
    })
    
    return answer;
}