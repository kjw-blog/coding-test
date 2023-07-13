const solution = (s) => {
    const answer =  s.toLowerCase()
                     .split(' ')
                     .map(text => text[0] ? text[0].toUpperCase()+text.substring(1) : '')
                     .join(" ")
    
    return answer
}