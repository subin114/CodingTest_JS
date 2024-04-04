function solution(n, control) {
    control.split('').forEach((i, idx) => {
        if (i === "w") return n += 1;
        else if (i === "s") return n -= 1;
        else if (i === "d") return n += 10;
        else if (i === "a") return n -= 10;
    })
    
    return n
}