function solution(a, b) {
    return Math.max(Number(`${a}${b}`), 2 * a * b)
    
    /*
    let strA = a.toString();
    let strB = b.toString();
    
    let sum = strA + strB;
    let multi = 2 * a * b;
    
    if (sum > multi) return Number(sum);
    else if (multi > sum) return multi;
    else return Number(sum);
    */
}