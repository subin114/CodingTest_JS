const solution = arr => {
    const stk = []
    
    arr.forEach(n => {
        if (stk.length === 0 || stk[stk.length - 1] !== n) stk.push(n)
        else stk.pop()
    })
    
    return stk.length === 0 ? [-1] : stk
}