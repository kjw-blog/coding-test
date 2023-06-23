const ITEMS = ["aya", "ye", "woo", "ma"]

function solution(babbling) {

    const handle = babbling.map((item) => {
        ITEMS.forEach(str => {
            item = item.replace(str,',')
        })
        
        return item
    }).filter(item => !item.replaceAll(',',''))
    
    return handle.length;
}