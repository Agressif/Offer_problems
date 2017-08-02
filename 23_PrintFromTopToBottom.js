// 从上往下打印二叉树
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

function printBinaryTree(root) {
  var queue = [],
    result = [];
  if (!root) {
    return result;
  }
  queue.push(root);
  while (queue.length) {
    var temp = queue.shift();
    result.push(temp.val);
    if (temp.left) {
      queue.push(temp.left);
    }
    if (temp.right) {
      queue.push(temp.right);
    }
  }
  return result;
}