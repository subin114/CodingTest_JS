const solution = (my_string, s, e) => {
    const re = my_string.slice(s, e + 1).split('').reverse().join('')
    
    return my_string.slice(0, s) + re + my_string.slice(e + 1)
}