function solution(k, m, score) {
    score = score.sort((a,b) => b-a).slice(0,Math.floor(score.length / m) * m);
    score = score.filter((item,i) => {
        return (i+1)%m === 0
    })
    
    return score.reduce((a,b) => a + (b*m),0);
}