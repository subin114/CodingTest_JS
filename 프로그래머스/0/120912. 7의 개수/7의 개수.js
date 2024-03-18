function solution(array) {
    let count = 0;
    
    array.join('').split('').forEach(n => {
        if (n === "7") count += 1
    })
    
    return count
}