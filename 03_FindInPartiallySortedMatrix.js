// 二维数组的查找
// 每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序
// 判断是否含有该整数

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {boolean}
 */

function find(arr, target) {
  let [row, col] = [arr.length, arr[0].length];
  let found = false;
  if (arr && row > 0 && col > 0) {
    let [i, j] = [0, col - 1];
    while (i < row && j >= 0) {
      if (arr[i][j] === target) {
        found = true;
        return found;
      } else if (arr[i][j] > target) {
        j--;
      } else {
        i++;
      }
    }
  }
  return found;
}

var arr = [
  [1, 2, 8, 9],
  [2, 4, 9, 12],
  [4, 7, 10, 13],
  [6, 8, 11, 15]
];

console.log(find(arr, 4))