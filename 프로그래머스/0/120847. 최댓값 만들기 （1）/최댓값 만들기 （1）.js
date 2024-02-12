function solution(numbers) {
    numbers.sort((a, b) => b - a);
    return Math.max(numbers[0] * numbers[1])
}