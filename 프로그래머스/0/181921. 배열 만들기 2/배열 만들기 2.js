const solution = (l, r) => {
    let arr = []
    
    for (let i = l; i <= r; i++) {
        if (i % 5 === 0) {
            if ([...String(i)].every(e => e === '0' || e === '5')) arr.push(i)
        }
    }
    
    return arr.length ? arr.sort((a, b) => a - b) : [-1]
}