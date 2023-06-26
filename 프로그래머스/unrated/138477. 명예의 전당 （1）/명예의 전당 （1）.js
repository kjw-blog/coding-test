function solution(k, score) {
    const answer = score.map((item,idx) => {
        const dailyScore = score.slice(0,idx+1).sort((a,b) => b-a);
        
        return dailyScore.slice(0,k).at(-1)
    })
    
    
    return answer;
}