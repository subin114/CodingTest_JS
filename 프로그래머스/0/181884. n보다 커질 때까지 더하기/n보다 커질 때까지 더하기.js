const solution = (numbers, n) => {
    return numbers.reduce((acc, i) => {
        if (acc <= n) acc += i
        return acc
    }, 0)
}