function solution(my_string, n) {
    let repeatStr = '';
    
    for (let i of my_string) {
        repeatStr += i.repeat(n)
    }
    
    return repeatStr
}