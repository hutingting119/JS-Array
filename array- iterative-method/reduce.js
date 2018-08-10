//从左到右为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值
//arr.reduce(function(total,currentValue,currentIndex,arr),initialValue)
//参数:total——必需，初始值，或者计算结束后的返回值   currentValue——必需，当前元素
// currentIndex——可选，当前元素的索引  arr——可选，当前数组

var arr1 = [6, 4, 3, 9, 9, 0, 13];
var arr2 = [4, 6, 'h', 8, 'i', 6, 14];
var tag1 = arr1.reduce(function (total, num) {
    return total + num
});
var tag2 = arr2.reduce(function (total, num) {
    return total + num
});

console.log(tag1);               //44
console.log(arr1);               //[ 6, 4, 3, 9, 9, 0, 13 ]
console.log(tag2);               //10h8i614
console.log(arr2);               //[ 4, 6, 'h', 8, 'i', 6, 14 ]

