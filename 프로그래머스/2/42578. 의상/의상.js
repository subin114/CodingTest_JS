function solution(clothes) {
  let map = new Array();
  let result = 1;

  for (let i = 0; i < clothes.length; i++) {
    if (map[clothes[i][1]] >= 1) map[clothes[i][1]]++;
    else map[clothes[i][1]] = 1;
  }

  for (let m in map) result *= map[m] + 1;

  return result - 1;
}