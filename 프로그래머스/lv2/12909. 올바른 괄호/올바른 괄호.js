function solution(s) {
    if(s[0] === ")" || s.at(-1) === '(') return false 
    
    let answer = []
    
    s.split("").forEach((item) => {
        if(item === ")" && answer.at(-1) === "(") {
            answer.pop()
        } else {
            answer.push(item)
        }
    })
    
    return !answer.length;
}