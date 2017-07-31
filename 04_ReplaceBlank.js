// 替换空格
// 把字符串中的每个空格换成 '%20'

/**
 * @param {string} str
 * @return {string}
 */

var str = 'we are happy.';
var length = 30;
// length 为字符数组string的总容量
function replaceBlank(str, length) {
  if (str === '') {
    return;
  }

  // originalLength 为字符串 str 的实际长度
  var [originalLength, numberOfBlank, i] = [0, 0, 0];
  while (str[i] !== '.') {
    originalLength++;
    if (str[i] === ' ') {
      numberOfBlank++;
    }
    i++;
  }

  // newLength 为把空格替换成'20%'之后的长度
  var newLength = originalLength + 2 * numberOfBlank;
  if (newLength > length) {
    return;
  }
  var indexOfOriginal = originalLength;
  var indexOfNew = newLength;
  while (indexOfOriginal >= 0 && indexOfNew > indexOfOriginal) {
    if (str[indexOfOriginal] === ' ') {
      str[indexOfNew--] = '0';
      str[indexOfNew--] = '2';
      str[indexOfNew--] = '%';
    } else {
      str[indexOfNew--] = str[originalLength];
    }
    indexOfOriginal--;
  }
  return str
}

console.log(replaceBlank(str, length))