function stack() {
  var items = [];
  this.push = function(element) { //添加一个（或几个）新元素到栈顶
    items.push(element);
  };
  this.pop = function() { //移除栈顶的元素，同时返回被移除元素
    return items.pop();
  };
  this.peek = function() { //返回栈顶的元素，但并不对栈做任何修改
    return items[items.length - 1];
  };
  this.isEmpty = function() { //如果栈内没有任何元素就返回true，否则返回false
    return items.length == 0;
  };
  this.size = function() { //返回栈里的元素个数
    return items.length;
  };
  this.clear = function() { //移除栈里的所有元素
    items = [];
  };
  this.print = function() { //打印
    console.log(items.toString());
  };
  this.toString = function() {
    return items.toString();
  };
}

var stack1 = new stack();
var stack2 = new stack();

function appendTail(ele) {
  stack1.push(ele);
}

function deleteHead() {
  if (stack1.isEmpty() && stack2.isEmpty()) {
    throw new Error("Queue is empty");
  }
  if (stack2.isEmpty()) {
    while (stack1.size > 0) {
      stack2.push(stack1.pop());
    }
  }
  return stack2.pop();
}