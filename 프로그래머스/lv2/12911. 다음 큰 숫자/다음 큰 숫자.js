const func = (num) => {
    return num.toString(2).split('').filter(a => a == '1').length
}

function solution(n) {
    const nl = func(n);
    let nextNum = n+1;
    
    while(true) {
        if(func(nextNum) === nl) {
            break;
        } else {
            nextNum++
        }
    }
    
    return nextNum;
}