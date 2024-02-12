function solution(n) {
    n = n.toString();
    let sum = 0;
    
    for (let i of n) {
        sum += parseInt(i);    
    }
    
    return sum
}