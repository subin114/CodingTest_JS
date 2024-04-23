const solution = answers => {
    const pick1 = [1, 2, 3, 4, 5]
    const pick2 = [2, 1, 2, 3, 2, 4, 2, 5]
    const pick3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    const scores = [0, 0, 0];

    answers.forEach((answer, i) => {
        if (answer === pick1[i % pick1.length]) scores[0]++;
        if (answer === pick2[i % pick2.length]) scores[1]++;
        if (answer === pick3[i % pick3.length]) scores[2]++;
    });

    const maxScore = Math.max(...scores);
    return scores.map((score, i) => score === maxScore ? i + 1 : undefined).filter(i => i !== undefined);
    
}