function solution(my_string, alp) {
    return my_string.split('').map(i => {
        return i === alp ? i.toUpperCase() : i
    }).join('')
}