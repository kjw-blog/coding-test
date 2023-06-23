function solution(n) {
    let cnt = 0;
    
    for(i=0; i<n; i++) {
        const result = test(cnt);
        cnt = result;
        cnt++
    }

    
    return cnt-1;
}

const test = (n) => {
    return (n%3 && !n.toString().includes('3')) ? n : test(n+1); 
}