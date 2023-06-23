function solution(lines) {
    const min = Math.min(...lines.map(item => item[0]))
    const max = Math.max(...lines.map(item => item[1]))
    
    const all = getLineText(min,max)
    
    
    const lineStr = lines.map(([s,e]) => {
        return getLineText(s,e)
    })
    
    let cnt = 0;
    all.forEach((line) => {
        const duplicationLength = lineStr.filter(item => item.includes(line)).length;
        if(duplicationLength > 1) cnt++
    })
    
    return cnt;
}

const getLineText = (min,max) => {
    const arr = Array.from({length:Math.abs(min-max)+1}).map((_,i) => min+i)
    return Array.from({length:arr.length-1}).map((_,i) => ''+arr[i]+arr[i+1])
}
