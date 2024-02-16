function solution(s){
    
    let stack = [];

    for (let i of s) {
        if (i === "(") stack.push(i);
        else {
            if (stack.length === 0 || stack.pop() !== "(") {
                return false;
            }
        }
    }
    
    return stack.length === 0;
}