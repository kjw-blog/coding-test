function solution(nums) {
    var answer = [];
    
    for(i =0; i<nums.length-2; i++) {
        for(j=i+1; j<nums.length-1; j++) {
            for(k=j+1; k<nums.length; k++) {
                answer.push(nums[i]+nums[j]+nums[k])
            }
        }
    }
 
    const result = answer.map((item) => {
        let flag = true
        
        for(i=2; i<item; i++) {
            if(item%i === 0) {
                flag = false;
                break;
            }
        }
        
        return flag
    })
    
    return result.filter(item => item).length;
}