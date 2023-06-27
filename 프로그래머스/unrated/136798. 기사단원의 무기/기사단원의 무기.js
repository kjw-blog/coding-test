function solution(number, limit, power) {
    var answer = 0;
    
    for(i=1; i<=number; i++) {
        let p = 0
        
        for(j=1; j<=Math.floor(i/2); j++) {
            if(i%j === 0) {
                p++
            }
        }
        
        answer += (p+1 > limit ? power-1 : p)
    }
    
    return answer + number;
}