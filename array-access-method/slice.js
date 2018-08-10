//slice() 抽取当前数组中的一段元素组合成一个新数组。
// 参数 start——起始位置
// 参数 end——结束位置
var arr1 = [3, 4, 2, 1, 7, 9];
var arr2 = arr1.slice(3, 5);

console.log(arr2);          //[ 1, 7 ]
console.log(arr1);          //[ 3, 4, 2, 1, 7, 9 ]