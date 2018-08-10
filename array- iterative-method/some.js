//some() 如果数组中至少有一个元素满足测试函数，则返回 true，否则返回 false。

var arr = [1, 5, 8, 3];

var tag1 = arr.some(function (val) {
    return val > 7
});

var tag2 = arr.some(function (val) {
    return val > 8
});

console.log(tag1);          //true
console.log(tag2);          //false
console.log(arr);           //[ 1, 5, 8, 3 ]