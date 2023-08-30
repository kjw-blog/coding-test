function solution(people, limit) {
    let answer = 0;
    people = people.sort((a,b) => b-a)

    // while(people.length > 0) {
    //     const p = people.shift();
    //     if(p+people.at(-1) <= limit) {
    //         people.pop();
    //     }
    //     answer++
    // }
    for(let i=0; i<people.length; i++) {
        if(people[i] + people.at(-1) <= limit) {
            people.pop();
        }
        answer++;
    }
    
    return answer;
}