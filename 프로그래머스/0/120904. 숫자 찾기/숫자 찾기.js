function solution(num, k) {
    let arr = Array.from(String(num), Number)
    let res = arr.indexOf(k)
    
    return res !== -1 ? res + 1 : -1
    
}