function solution(num_str) {
    return num_str.split('').map(Number).reduce((sum, n) => sum += n, 0)
}