function solution(a, b) {
    let strA = a.toString();
    let strB = b.toString();
    
    let sum = strA + strB;
    let multi = 2 * a * b;
    
    if (sum > multi) return Number(sum);
    else if (multi > sum) return multi;
    else return Number(sum);
}