//findIndex()，找到第一个符合要求的值，并返回该值索引，找不到返回-1

var arr = [7, 5, 4, 2, 0, 1, 4];

var tag1 = arr.findIndex(function (val) {
    return val % 2 === 0;
});
var tag2 = arr.findIndex(function (val) {
    return val > 8;
});

console.log(tag1);          //2
console.log(tag2);          //-1
console.log(arr);           //[ 7, 5, 4, 2, 0, 1, 4 ]