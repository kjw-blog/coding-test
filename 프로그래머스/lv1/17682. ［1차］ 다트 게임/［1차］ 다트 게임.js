const score = ['S','D','T']

function solution(dartResult) {
    let answer = [...dartResult]; 
    let result =[]
    
    for(i=0; i<dartResult.length; i++) {
        const now = dartResult[i]
        
        const isPrevNum = !Number.isNaN(Number(result.at(-1)));
        const isNowNum = !Number.isNaN(Number(now))
        

        if(isPrevNum && isNowNum) {
            result.splice(result.length-1,1,result.at(-1) + now)
        } else {
            result.push(now)
        } 
    }
    
    result.forEach((item,i) => {
        const prev = result[i-1];
        
        if(score.includes(item)) {
            const scoreIndex = score.indexOf(item) + 1
            result.splice(i-1,2,Number(prev) ** scoreIndex)
        }
    })
    
    result.forEach((item,i) => {
        const prev = result[i-1];
        
        if(item === '#') {
            result.splice(i-1,2,-Number(prev))
        }
    })
    
    while(result.indexOf('*') > 0) {
        const idx = result.indexOf('*');
        const indexArr = result.map((item,i) => i).filter(item => item < idx).slice(-2);
        
        result = result.map((item,i) => indexArr.includes(i) ? item*2 : item);
        result.splice(idx,1)
    }
    
    
    return result.reduce((a,b) => a+b);
}