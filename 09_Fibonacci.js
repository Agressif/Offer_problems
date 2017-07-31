// 写一个函数，输入n，求斐波那契数列的第n项

// 低效率
function fibonacci_1(n) {
  if (n <= 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2)
}

// 用树形结构来表示fibonacci的依赖关系，从下往上计算
function fibonacci_2(n) {
  var result = [0, 1];
  if (n < 2) {
    return result[n]
  }
  var fibNMinusOne = 1,
    fibNMinusTwo = 0;
  var fibN = 0;
  for (var i = 2; i <= n; i++) {
    fibN = fibNMinusOne + fibNMinusTwo;
    fibNMinusTwo = fibNMinusOne;
    fibNMinusOne = fibN;
  }
  return fibN
}

// 一只青蛙一次可以跳1级台阶，也可以跳2级。求青蛙跳上一个n级的台阶总共有多少种跳法
// 矩形覆盖问题
function fibonacci_3(n) {
  var result = [1, 2];
  if (n <= 2) {
    return result[n]
  }
  var fibNMinusOne = 2,
    fibNMinusTwo = 1;
  var fibN = 0;
  for (var i = 3; i <= n; i++) {
    fibN = fibNMinusOne + fibNMinusTwo;
    fibNMinusTwo = fibNMinusOne;
    fibNMinusOne = fibN;
  }
  return fibN
}

console.log(fibonacci_3(4))