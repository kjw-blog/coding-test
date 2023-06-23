function solution(s) { 
    var answer = s;
    const array = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    
    array.forEach((num,i) => {
        answer = answer.replaceAll(num, i)
    })
    
    return Number(answer);
}