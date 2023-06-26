function solution(N, stages) {
    const arr = []
    let length = stages.length
    
    Array.from({length:N}).forEach((_,i) => {
        const fail = stages.filter(item => item <= i+1);
        
        stages = stages.filter(item => item > i+1);
        arr.push(fail.length/length)
        length = stages.length 
    })
    
    const result = arr.map((item,i) => {
        return {
           index : i+1,
            item
        }
    })
    
    return result.sort((a,b) => b.item - a.item).map(item => item.index);
}