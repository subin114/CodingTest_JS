function solution(my_string) {
    let arr = [...new Set(my_string)];
    return arr.join('')
}