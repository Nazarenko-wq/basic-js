const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  let arr = String(n).split('');
  let maxNumber = 0;
  let arr2 = [];
  let arr3 = [];


  for(let i = 0;  i < arr.length; i++) {
      arr3.push(arr[i]);
      arr.splice(i, 1);
      arr2.push(arr.join(''));
      arr.splice(i, 0, arr3[0]);
      arr3.pop();
  }

  for(let elem of arr2) {
      if(maxNumber < elem) {
          maxNumber = elem;
      }
  }

  return maxNumber;
}

module.exports = {
  deleteDigit
};
