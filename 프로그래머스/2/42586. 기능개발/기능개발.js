function solution(progresses, speeds) {
    let answer = [1];
    
    let days = progresses.map((v,i) => Math.ceil((100-v)/speeds[i]));
    let publish = days.shift();
    
    days.forEach(day => {
        if(publish >= day) {
            answer[answer.length-1]++
        } else {
            publish = day
            answer.push(1)
        }
    })
    return answer;
}

console.log(solution([90, 98, 97, 96, 98],[1,1,1,1,1]))