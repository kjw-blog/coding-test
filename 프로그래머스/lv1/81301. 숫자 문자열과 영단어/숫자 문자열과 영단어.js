function solution(s) { 
    var answer = s;
    const array = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    
    array.forEach(num => {
        answer = answer.replaceAll(num, array.indexOf(num))
    })
    
    return Number(answer);
}