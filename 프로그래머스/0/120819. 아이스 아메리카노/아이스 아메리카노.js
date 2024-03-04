function solution(money) {
    let res = [];
    
    if (money >= 5500) {
        res[0] = Math.floor(money / 5500) // 잔 수
        res[1] = money - (res[0] * 5500)  // 남은 돈
    } else if (money < 5500 && money >0) {
        res[0] = 0
        res[1] = money
    } else {
        res[0] = 0
        res[1] = 0
    }
    
    return res;
}