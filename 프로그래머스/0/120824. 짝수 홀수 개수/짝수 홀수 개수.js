function solution(num_list) {
    let a = 0,
        b = 0;
    
    for (let i of num_list) {
        if (i % 2 === 0) a++;
        else b++;
    }
    
    return [a, b]
}