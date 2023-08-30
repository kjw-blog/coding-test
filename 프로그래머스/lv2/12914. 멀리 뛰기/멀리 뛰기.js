
function solution(n) {
    const flag = 1234567;
    const arr = [];
    
    for(i=0; i<=n+1; i++) {
        if(i<=1) {
            arr.push(i)
        } else {
            const num = arr[i-1] + arr[i-2];
            
            if(arr[i-1] > flag) {
                const p = arr.pop();
                
                arr.push(p%flag);
                arr.push(num%flag)
            } else {
                arr.push(num);
            }
        }      
    }
    const max = arr.at(-1);
    
    return max%1234567;
}

console.log(solution(1300))