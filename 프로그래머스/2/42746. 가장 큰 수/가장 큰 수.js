function solution(numbers) {
    num = numbers.map(String).sort((a, b) => (b + a) - (a + b));
    if (num[0] === "0") return "0";
    
    return num.join('')
}