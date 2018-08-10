//concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组
var arr1 = [5, 8, 3];
var arr2 = ['t', 'y', 'i'];
var arr3 = arr1.concat(arr2);

console.log(arr1);      //[ 5, 8, 3 ]
console.log(arr2);      //[ 't', 'y', 'i' ]
console.log(arr3);      //[ 5, 8, 3, 't', 'y', 'i' ]
