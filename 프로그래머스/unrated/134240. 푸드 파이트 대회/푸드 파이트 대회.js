function solution(food) {
    const foods = food.map((item,i) => Math.floor(item/2))
                      .map((item,i) => i.toString().repeat(item))
                      .filter(item => item)

    return foods.join('') + '0' + foods.reverse().join('');
}