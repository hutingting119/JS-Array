//every() 方法测试数组的所有元素是否都通过了指定函数的测试
var arr = [2, 4, 6, 7];

var tag1 = arr.every(function (val) {
    return val > 1;
});

var tag2 = arr.every(function (val) {
    return val>9
});

console.log(tag1);              //true
console.log(tag2);              //false
console.log(arr);               //[ 2, 4, 6, 7 ]
