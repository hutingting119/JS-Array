//entries()，返回一个数组迭代器对象，该迭代器会包含所有数组元素的键值对。

var arr = [3, 6, 'o', 'p', 'hi'];

var arr2 = arr.entries();

console.log(arr2);                  //{}
console.log(arr2.next());           //{ value: [ 0, 3 ], done: false }
console.log(arr);