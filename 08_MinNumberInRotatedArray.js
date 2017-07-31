// 旋转数组的最小数字

function arrayMin(arr) {
  if (arr.length <= 0) {
    throw new Error('Empty array!')
  }
  var [index1, index2] = [0, arr.length - 1];
  var indexMid = index1;
  while (arr[index1] >= arr[index2]) {
    if (index2 - index1 === 1) {
      indexMid = index2;
      break;
    }
    indexMid = Math.floor((index1 + index2) / 2);

    // 如果下标为 index1,index2,indexMid 指向的三个数值相等
    // 只能顺序查找
    if (arr[index1] === arr[index2] && arr[indexMid] === arr[index1]) {
      return MinInOrder(arr, index1, index2);
    }
    if (arr[indexMid] >= arr[index1]) {
      index1 = indexMid;
    } else if (arr[indexMid] <= arr[index2]) {
      index2 = indexMid;
    }
  }
  return arr[indexMid];
}

function MinInOrder(arr, index1, index2) {
  var result = arr[index1];
  for (var i = index1 + 1; i <= index2; i++) {
    if (result > arr[i]) {
      result = arr[i]
    }
  }
  return result
}

// var arr = [3, 4, 5, 1, 2]
var arr = [1, 0, 1, 1, 1];

console.log(arrayMin(arr));