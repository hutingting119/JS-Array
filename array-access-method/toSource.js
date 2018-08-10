//返回一个字符串,代表该数组的源代码.
//在调试时,可以使用toSource方法来查看一个数组的内容.

//火狐浏览器
var arr = [3,5,6];
console.log(arr.toSource());        //[3, 5, 6]

//谷歌浏览器
var arr = [3,5,6];
console.log(arr.toSource());        //VM105477:3 Uncaught TypeError: arr.toSource is not a function