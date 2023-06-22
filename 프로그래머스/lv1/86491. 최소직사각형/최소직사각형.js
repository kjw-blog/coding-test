function solution(sizes) {
    const sort = sizes.map(item => item.sort((a,b) => a-b));
    
    const width = Math.max(...sort.map(item => item[0]));
    const height = Math.max(...sort.map(item => item[1]));
    
    return width * height;
}