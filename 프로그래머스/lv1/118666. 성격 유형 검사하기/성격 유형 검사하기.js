function solution(survey, choices) {
    var answer = '';
    choices = choices.map(item => item-4)
    
    const temp = {R:0,T:0,C:0,F:0,J:0,M:0,A:0,N:0}
    
    survey.forEach((item,i) => {
        const score = choices[i]
        
        
        if(score > 0) {
            temp[item[1]] = (temp[item[1]] || 0) + Math.abs(score)
        } else if (score < 0) {
             temp[item[0]] = (temp[item[0]] || 0) + Math.abs(score)
        }
    })
    
    
    console.log(temp)
    
    const first = temp['R'] >= temp['T'] ? 'R' : 'T'
    const seconds = temp['C'] >= temp['F'] ? 'C' : 'F'
    const thirds = temp['J'] >= temp['M'] ? 'J' : 'M'
    const fourths = temp['A'] >= temp['N'] ? 'A' : 'N'
    
    return `${first}${seconds}${thirds}${fourths}`;
}