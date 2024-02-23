function solution(s1, s2) {
    let common = new Set();
    s1.forEach(str => {
        if (s2.includes(str)) common.add(str)
    })
    
    return common.size
    }