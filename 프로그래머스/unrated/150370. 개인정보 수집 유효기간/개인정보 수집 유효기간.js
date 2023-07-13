function solution(today, terms, privacies) {
    const answer = []
    
    terms = terms.map((item) => item.split(' '))
    
    privacies.forEach((item,idx) => {
        const [date,type] = item.split(' ');
        
        const month = terms.find(termsItem => termsItem[0] === type)[1]
        
        const todayDate = new Date(today);
        const privacyDate = new Date(date);

        console.log(privacyDate)
        
        let expirationDate  = 
              new Date(privacyDate.setMonth(privacyDate.getMonth() + Number(month)))
        
        expirationDate = new Date(expirationDate.setDate(expirationDate.getDate() - 1))
        
        if(todayDate > expirationDate) {
            answer.push(idx + 1)
        }
        
    })
    
    return answer;
}