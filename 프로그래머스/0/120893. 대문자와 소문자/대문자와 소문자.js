function solution(my_string) {
    let arr = [...my_string];
    
    let res = arr.map((i) => {
        if (i.toLowerCase() == i) return i.toUpperCase();
        else return i.toLowerCase();
    })
    
    return res.join('')
    
}