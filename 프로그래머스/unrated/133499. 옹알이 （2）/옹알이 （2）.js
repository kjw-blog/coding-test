const WORDS = ["aya", "ye", "woo", "ma"]

function solution(babbling) {
    
    const filter = babbling.filter(item => {
        const reg = /^[0-9]+$/
        WORDS.forEach(word => item = item.replaceAll(word,WORDS.indexOf(word)))

        if(reg.test(item) && [...item].every((i,idx) => i !== [...item][idx+1])) {
            return true
        }
        
        return false
    })
    
    
    return filter.length;
}