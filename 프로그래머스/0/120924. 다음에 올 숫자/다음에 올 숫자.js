const solution = common => {
    const res = common[1] / common[0] === common[2] / common[1]
    return res ? common[1] / common[0] * common[common.length-1] : common[1] - common[0] + common[common.length-1]
}