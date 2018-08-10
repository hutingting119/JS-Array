//lastIndexOf(),返回数组中最后一个与指定值相等的元素的索引，不存在，返回-1

var arr = [5, 3, 9, 'o', 'k', 5, 'o'];

console.log(arr.lastIndexOf(5));            //5
console.log(arr.lastIndexOf(6));            //-1
console.log(arr.lastIndexOf('o'));          //6
console.log(arr.lastIndexOf('p'));          //-1
console.log(arr);                           //[ 5, 3, 9, 'o', 'k', 5, 'o' ]