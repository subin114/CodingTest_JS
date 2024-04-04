const solution = (names) => {
    let res = [];
    names.forEach((i, idx) => {
        if (idx % 5 === 0) res.push(i)
    })
    
    return res
}