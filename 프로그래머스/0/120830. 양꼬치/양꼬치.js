function solution(n, k) {
    if (n >= 10) {
        return (n * 12000) + (k * 2000) - (Math.floor(n / 10) * 2000)
    } else {
        return (n * 12000) + (k * 2000)
    }
    // return (n / 10 === 0) ? (n * 12000) + ((k - ( n / 10)) * 2000) : (n * 12000) + (k * 2000)
}