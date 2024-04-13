const solution = num_list => {
    const res = num_list.reduce((acc, n, idx) => {
        if ((idx + 1) % 2 !== 0) acc.odd += n
        else acc.even += n
        
        return acc
    }, { odd: 0, even: 0 })
    
    return Math.max(res.odd, res.even)
}