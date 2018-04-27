'use strict';

var arr = [3, 1.5, 9, 2, 5, 2];
arr.sum = function () {
  return this.reduce(function (a, x) {
    return a + x;
  });
};
arr.avg = function () {
  return this.sum() / this.length;
};
Object.defineProperty(arr, 'sum', { enumerable: false });
Object.defineProperty(arr, 'avg', { enumerable: false });

for (var num in arr) {
  console.log(num);
}