const solution = strArr => {
    let arr = strArr.map(c => c.length)
    let res = {}
    
    arr.forEach(c => res[c] = (res[c] || 0) + 1)
    
    return Math.max(...Object.values(res))
}