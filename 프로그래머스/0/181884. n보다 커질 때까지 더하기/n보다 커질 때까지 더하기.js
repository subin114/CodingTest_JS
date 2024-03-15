function solution(numbers, n) {
    let sum = 0;
    
    let result = numbers.reduce((sum, i) => {
        if (sum <= n) sum += i;
        return sum;
    })
    
    return result;
}