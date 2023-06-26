function solution(n, m, section) { 
    let cnt = 0;
    let max = 0;
    section.forEach(item => {
        if(max < item) {
            cnt++;
            max = m+item-1
        }
    })
    
    return cnt
}