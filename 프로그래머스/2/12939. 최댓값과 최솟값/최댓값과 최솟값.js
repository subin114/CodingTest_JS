const solution = s => {
    const res = s.split(' ').map(Number)
    
    return Math.min(...res) + ' ' + Math.max(...res)
}