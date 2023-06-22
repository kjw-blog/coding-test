function solution(n, arr1, arr2) {
    var answer = [];
    
    const a1 = getArray(n,arr1);
    const a2 = getArray(n,arr2);
    
    const result = a1.map((item,i) => {
        const item2 = a2[i].split('');
        
        return [...item].map((str,idx) => {
            return Math.max(Number(str),Number(item2[idx]))
        }).join('')
    })
    
    
    return result.map(item => item.replaceAll('1','#').replaceAll('0',' '));
}

const getArray = (n,arr) => {
    return arr.map((a) => a.toString(2)).map((a) => '0'.repeat(n-a.length) + a);
}
