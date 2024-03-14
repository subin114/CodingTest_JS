function solution(num_list) {
    let mul = 1;
    let sum = 0;
    
    num_list.forEach(n => mul *= n);
    num_list.forEach(n => sum += n);
    
    return Math.pow(sum, 2) > mul ? 1 : 0;
}