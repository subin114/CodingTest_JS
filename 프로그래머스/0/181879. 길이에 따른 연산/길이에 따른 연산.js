function solution(num_list) {
    let res;
    
    if (num_list.length >= 11) {
        res = 0;
        num_list.forEach(n => res += n)
    } else {
        res = 1;
        num_list.forEach(n => res *= n)
    }
    
    return res;
}