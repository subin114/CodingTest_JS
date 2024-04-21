const solution = (my_strings, parts) => {
    return my_strings.map((c, i) => {
        const [s, e] = parts[i]
        
        return c.slice(s, e + 1)
    }).join('')
}