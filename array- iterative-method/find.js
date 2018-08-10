//find()，找到第一个符合要求的元素，返回元素值，找不到返回undefined

var arr = [5, 3, 2, 8, 6, 4, 5];

var tag1 = arr.find(function (val) {
    return val > 7;
});

var tag2 = arr.find(function (val) {
    return val > 10;
})

console.log(tag1);           //8
console.log(tag2);           //undefined
console.log(arr);           //[ 5, 3, 2, 8, 6, 4, 5 ]