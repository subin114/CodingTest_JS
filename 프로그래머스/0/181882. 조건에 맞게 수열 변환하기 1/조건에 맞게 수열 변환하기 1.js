function solution(arr) {
 
    return arr.map(n => {
        if(n >= 50) {
            return n % 2 === 0 ? Math.floor(n / 2) : n
        } else {
            return n % 2 !== 0 ? n * 2 : n
        }
    })
}