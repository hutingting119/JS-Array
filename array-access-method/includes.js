//includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。
var arr1 = [6,4,3];
var arr2 = ['g','u','i','o'];

var tag1 = arr1.includes(6);
var tag2 = arr1.includes(5);
var tag3 = arr2.includes('o');
var tag4 = arr2.includes('k');

console.log(tag1);          //true
console.log(tag2);          //false
console.log(arr1);          //[ 6, 4, 3 ]
console.log(tag3);          //true
console.log(tag4);          //false
console.log(arr2);          //[ 'g', 'u', 'i', 'o' ]