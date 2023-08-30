
function solution(n) {
    const flag = 1234567;
    const arr = [];
    
    for(i=0; i<=n+1; i++) {
        if(i<=1) {
            arr.push(i)
        } else {
           arr.push((arr[i-2]+arr[i-1])%flag)
        }      
    }
    const max = arr.at(-1);
    
    return max;
}

console.log(solution(1300))