const solution = arr => {
    const stk = []

    for (const n of arr) {
        while (stk.length > 0 && stk[stk.length - 1] >= n) stk.pop()
        stk.push(n)
    }

    return stk
}