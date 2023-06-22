function solution(t, p) {
    const slice = [];
    
    for(i=0; i<t.length-p.length+1; i++) {
        slice.push(Number(t.substring(i, i+p.length)))
    }
    
    return slice.filter(num => num <= Number(p)).length;
}