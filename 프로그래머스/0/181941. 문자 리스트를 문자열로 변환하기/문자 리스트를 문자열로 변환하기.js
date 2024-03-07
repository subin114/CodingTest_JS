function solution(arr) {
    return arr.toString().split('').filter(i => i !== ",").join('')
    
}