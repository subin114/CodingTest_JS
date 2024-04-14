const solution = num_list => {
    const res = num_list.findIndex(n => n < 0)
    return res !== -1 ? res : -1
}