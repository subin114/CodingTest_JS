const solution = (my_string, indices) => my_string.split('').filter((c, i) => !indices.includes(i)).join('')
    
