function solution(my_string) {
    let arr = [];
    
    for (let i = 0; i < my_string.length; i++) {
        arr.push(my_string.substring(i))
    }
    
    return arr.sort()
}