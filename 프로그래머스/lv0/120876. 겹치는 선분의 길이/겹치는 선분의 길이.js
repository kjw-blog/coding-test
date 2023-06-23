function solution(lines) {
    const min = Math.min(...lines.map(item => item[0]))
    const max = Math.max(...lines.map(item => item[1]))
    
    const all = getLineText(min,max)
    
    console.log(all)
    
    const [line1,line2,line3] = lines.map(([s,e]) => {
        return getLineText(s,e)
    })
    
    return [line1,line2,line3];
}

const getLineText = (min,max) => {
    const arr = Array.from({length:Math.abs(min-max)+1}).map((_,i) => min+i)
    return Array.from({length:arr.length-1}).map((_,i) => ''+arr[i]+arr[i+1])
}