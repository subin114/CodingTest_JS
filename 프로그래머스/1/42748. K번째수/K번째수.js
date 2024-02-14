function solution(array, commands) {
    
    return commands.map(command => {
        let [i, j, k] = command;
        return array.slice(i - 1, j).sort((a, b) => a - b)[k - 1];
    })
    
}