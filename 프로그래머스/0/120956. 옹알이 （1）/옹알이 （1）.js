const solution = babbling => {
    const arr = ['aya', 'ye', 'woo', 'ma']
    
    return babbling.reduce((acc, c) => {
        arr.forEach(v => c = c.split(v).join(','))

        return [...c].filter(v => v !== ',').length ? acc : acc + 1
    }, 0)
}