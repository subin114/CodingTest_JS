const solution = emergency => {
    let sorted = emergency.slice().sort((a, b) => b - a)
    return emergency.map(n => sorted.indexOf(n) + 1)
}