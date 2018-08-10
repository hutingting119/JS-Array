//返回数组中第一个与指定值相等的元素的索引，如果找不到这样的元素，则返回 -1

var arr = [6,4,3,2,8,'o','k'];

console.log(arr.indexOf(6));            //0
console.log(arr.indexOf(5));            //-1
console.log(arr.indexOf('o'));          //5
console.log(arr.indexOf('p'));          //-1
console.log(arr);                       //[ 6, 4, 3, 2, 8, 'o', 'k' ]