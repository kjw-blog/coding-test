function solution(s) {
    var numbers = s.split(' ').map(Number);
    
    return `${Math.min(...numbers)} ${Math.max(...numbers)}`;
}