function solution(my_string) {
    let arr = my_string.split('').filter((num) => {
        if (!isNaN(num)) return num
    })
    
    return arr.map((i) => +i).sort()
}