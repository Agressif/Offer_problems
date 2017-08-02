// 二叉树中和为某一值的路径
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */

function FindPath(root, sum) {
  var result = [],
    path = [],
    currentSum = 0;
  if (!root) {
    return result;
  }

  var dfsFind = function(root, sum, path, currentSum) {
    currentSum += root.val;
    path.push(root.val);
    // 如果是叶节点，并且路径上结点的和等于输入的值
    // 打印出这条路径
    if (currentSum === sum && !root.left && !root.right) {
      result.push(path.slice(0));
      console.log(path)
    }
    // 如果不是叶节点，遍历它的子节点
    if (root.left) {
      dfsFind(root.left, sum, path, currentSum);
    }
    if (root.right) {
      dfsFind(root.right, sum, path, currentSum);
    }
    // 在返回到父节点之前，在路径上删除当前结点
    path.pop();
  }
  dfsFind(root, sum, path, currentSum);
  return result;
}

var tree = {
  val: 10,
  left: {
    val: 5,
    left: {
      val: 4
    },
    right: {
      val: 7
    }
  },
  right: {
    val: 12
  }
}

console.log(FindPath(tree, 22))