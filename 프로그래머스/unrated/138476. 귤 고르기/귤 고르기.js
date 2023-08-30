function solution(k, tangerine) {
    const num = tangerine.reduce((a,b) => {
        a[b] = (a[b]+1 || 1)
       return a
    },{});
    
    const nums = Object.values(num).sort((a,b) => b-a)
    
    let box = 0,answer=0;
    
    while(k>box) {
        box += nums.shift();
        answer++
    }
    
    return answer;
}