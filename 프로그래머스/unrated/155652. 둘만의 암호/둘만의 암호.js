function solution(s, skip, index) {
    const alphabet = Array.from({length:26}).map((_,i) => {
        const a = 'a'.charCodeAt();
        return String.fromCharCode(a+i)
    }).filter(item => !skip.includes(item));   
    
    var answer = '';
    
    [...s].forEach((char) => {
        let i = alphabet.indexOf(char)+index
        i = i >= alphabet.length ? i % alphabet.length : i
        
        answer += alphabet[i]
    })
    
    return answer;
}