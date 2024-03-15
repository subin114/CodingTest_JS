function solution(myString, pat) {
    let res1 = myString.replaceAll(/A|B/g, (i) => {
        if (i === "A") return "B";
        else return "A";
    })
    
    return res1.includes(pat) ? 1 : 0
}