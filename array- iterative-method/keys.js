//keys()，返回一个数组迭代器对象，该迭代器会包含所有数组元素的键

var arr = [6, 4, 6, 9, 3];

console.log(arr.keys().next());      //{ value: 0, done: false }
console.log(arr);                    //[ 6, 4, 6, 9, 3 ]