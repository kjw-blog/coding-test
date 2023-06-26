function solution(cards1, cards2, goal) {
    
    const temp = {}
    
    for(i=0; i<goal.length; i++) {
        const item = goal[i];
        
        if(cards1.includes(item)) {            
           if((temp.a || 0) === cards1.indexOf(item)) {
               temp.a = (temp.a || 0) + 1
           } else {
               return 'No'
           }
        } else if (cards2.includes(item)) {
            if((temp.b || 0) === cards2.indexOf(item)) {
               temp.b = (temp.b || 0) + 1
           } else {
               return 'No'
           }
        }
    }
    
    return 'Yes'
}
