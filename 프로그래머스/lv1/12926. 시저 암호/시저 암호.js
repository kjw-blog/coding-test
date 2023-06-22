function solution(s, n) {
    const upper = getArray('A');
    const lower = getArray('a');
    return [...s].map(item => {
        const upperIndex = upper.indexOf(item);
        const lowerIndex = lower.indexOf(item);
        
        if(upperIndex !== -1) {
            return upper[getIndex(upperIndex,n)]
        } else if(lowerIndex !== -1) {
            return lower[getIndex(lowerIndex,n)]
        } 
        
        return item
    }).join('');
}

const getArray = (str) => {
    return Array.from({length:26}).map((_,i) => String.fromCharCode(str.charCodeAt()+i))
}
const getIndex = (i,n) => {
    return i+n>25 ? i+n-26 :i+n
}