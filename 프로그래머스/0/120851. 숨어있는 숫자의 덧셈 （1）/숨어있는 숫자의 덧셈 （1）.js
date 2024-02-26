function solution(my_string) {
    let arr = [...my_string];
    let sum = 0;
    
    arr.filter(i => {
        if (!isNaN(Number(i))) sum += Number(i)
    })
    
    return sum
}