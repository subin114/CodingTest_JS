const solution = (arr, divisor) => {
    let res = arr.filter(n => n % divisor === 0).sort((a, b) => a- b)
    return res.length > 0 ? res : [-1]
}