//Array.isArray() 用于确定传递的值是否是一个 Array
var arr1 = [1,4,8];
var str1 = 'hello';

console.log(Array.isArray(arr1));       //true
console.log(arr1);                      //[ 1, 4, 8 ]
console.log(Array.isArray(str1));       //false
console.log(str1);                      //hello