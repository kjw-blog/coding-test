function solution(n, words) {
    var answer = [];
    
    
    
    for(i =0; i<words.length; i++) {
        if(i!==0) {
            const lt = words[i-1].at(-1);
            const st = words[i].at(0);
            
            
            if(lt !== st || words.filter((_,idx) => idx <= i).filter(word => word === words[i]).length > 1) {
                answer = [i%n+1, Math.ceil((i+1)/n)];
                break;
            }
        }
    }

    return answer.length ? answer : [0,0];
}