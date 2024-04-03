function solution(slice, n) {
    return n % slice === 0 ? parseInt(n / slice) : Math.ceil(n / slice)
}