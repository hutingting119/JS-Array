//fill()，用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引
//使用方法：array.fill(value,star,end)
//参数：value——更换的值  start——起始位置，默认是0  end——结束位置，默认array.length

var arr1 = [4, 6, 9, 2, 43, 5, 1];
var arr2 = [4, 6, 9, 2, 43, 5, 1];

arr1.fill('a', 0, 3);
arr2.fill('b');

console.log(arr1);              //[ 'a', 'a', 'a', 2, 43, 5, 1 ]
console.log(arr2);              //[ 'b', 'b', 'b', 'b', 'b', 'b', 'b' ]