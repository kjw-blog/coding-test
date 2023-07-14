function solution(n) {
    var answer = 0;
    const array = [0,1]
    
    for(i=2; i<=n; i++) {
        
        
        array.push((array[i-1] + array[i-2]) % 1234567)
    }
    
    console.log(array);
    console.log(n)
    
    return array[n]; 
}