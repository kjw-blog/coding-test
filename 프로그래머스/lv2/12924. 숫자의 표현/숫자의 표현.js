function solution(n) {
    let answer = 0;
    let sn = 0;
    let idx = 0;
    let num = 0
    
    while(true) {
        idx += 1;
        num += idx
        
        if (num >= n) {
            if(num===n) answer++
            
            sn++;
            idx = sn;
            num = 0;
            
        } 
        if(idx > n) {
            break;
        }
    }


    return answer;
}