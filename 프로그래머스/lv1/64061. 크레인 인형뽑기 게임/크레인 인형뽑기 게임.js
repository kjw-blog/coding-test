function solution(board, moves) {
    const boards = []
    
    for(i=0; i<board.length; i++) {
        let temp = []
        for(j=0; j<board.length; j++) {
           temp.push(board[j][i])
        }
        boards.push(temp)
    }
    
    let temp = []
    
    moves.forEach(m => {
        const line = boards[m-1];
        
        const itemIndex = line.findIndex(item => item !== 0);
        
        temp.push(line[itemIndex])
        line.splice(itemIndex,1,0)
    })
    
    temp = temp.filter(item => item)
    const allLength = temp.length
    
    while(temp.some((item,i) => item === temp[i])) {
        const fi = temp.findIndex((item,i) => item === temp[i+1]);
        
        if(fi === -1) break;
        
        temp.splice(fi,2)
    }
    
    
    
    return allLength - temp.length;
}