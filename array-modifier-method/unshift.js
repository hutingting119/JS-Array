//unshift()，在数组的开头增加一个或多个元素，并返回数组长度

var arr = [4,7,2,6,8,2];

console.log(arr.unshift(0,1,4));            //9
console.log(arr);                           //[ 0, 1, 4, 4, 7, 2, 6, 8, 2 ]