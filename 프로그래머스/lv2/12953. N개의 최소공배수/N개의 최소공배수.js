function solution(arr) {
    arr = arr.sort((a,b) => a-b)
    
    let max = Math.max(...arr),
        idx=0;
    
    while(true) {
        if(arr.every(item => max%item === 0)) {
            break;
        } else {
            max++
        }
    }
    
    return max
}