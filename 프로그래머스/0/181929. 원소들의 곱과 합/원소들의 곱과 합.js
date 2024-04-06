const solution = nums => {
  let mul = nums.reduce((acc, i) => acc * i, 1)
  let sum = nums.reduce((acc, i) => acc + i, 0)

  return mul < Math.pow(sum, 2) ? 1 : 0
}