function solution(a, b) {
    a = a.toString()
    b = b.toString()
    
    let sum1 = a + b
    let sum2 = b + a
    
    return sum1 > sum2 ? Number(sum1) : Number(sum2)
}