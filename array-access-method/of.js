// Array.of() 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。
var str1 = Array.of('arr');
var str2 = Array('arr');
var arr1 = Array.of(5,3,8);
var arr2 = Array(5,3,8);
var arr3 = Array.of(5);
var arr4 = Array(5);

console.log(str1);          //[ 'arr' ]
console.log(str2);          //[ 'arr' ]
console.log(arr1);          //[ 5, 3, 8 ]
console.log(arr2);          //[ 5, 3, 8 ]
console.log(arr3);          //[ 5 ]
console.log(arr4);          //[ , , , ,  ]