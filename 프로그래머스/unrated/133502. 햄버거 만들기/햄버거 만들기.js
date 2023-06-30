function solution(food) {
    let i = 0
    let count = 0
    let process = true
    while (process) {
        if (food[i] === 1 && food[i+1] === 2 &&
            food[i+2] === 3 && food[i+3] === 1){
            food.splice(i,4)
            count++
            if (i !== 0) {
                i -= 3
            }
        } else if (i > food.length - 3){
            process = false
        } else {
            i++
        }
    }
    return count
}