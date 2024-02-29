function solution(my_string) {
    my_string = my_string.split('').map((i) => {
        if (i.toLowerCase() == i) return i.toUpperCase();
        else return i.toLowerCase();
    })
    
    return my_string.join('')
    
}