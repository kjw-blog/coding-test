function solution(s) {
    const answer = [];
    let first = ''
    let text = ''
    
    for(i=0; i<s.length; i++) {
        if(!first) first = s[i];
        text += s[i]
        
        if(text.length/2 === [...text].filter(item => item === first).length) { 
            answer.push(text);
            first = '';
            text = ''
        }
    }
    
    return answer.join('').length === s.length ? answer.length : answer.length+1;
}