function solution(s) {
    let answer = 0;
    let arr = [s[0]]
    
    for(i=1; i<=s.length; i++) {
        if(arr.at(-1) === s[i]) {
            arr.pop()
        } else {
            arr.push(s[i])
        }
    }
    
    return arr.length ? 0 : 1
}