//join() 连接所有数组元素组成一个字符串
var arr1 = [5, 3, 2, 8];
var arr2 = ['h', 'e', 'l', 'l', 'o'];

var str1 = arr1.join();
var str2 = arr1.join('')
var str3 = arr2.join();
var str4 = arr2.join('+');

console.log(str1);              //5,3,2,8
console.log(str2);              //5328
console.log(arr1);              //[ 5, 3, 2, 8 ]
console.log(str3);              //h,e,l,l,o
console.log(str4);              //h+e+l+l+o
console.log(arr2);              //[ 'h', 'e', 'l', 'l', 'o' ]