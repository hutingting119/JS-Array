//map()，返回一个由回调函数的返回值组成的新数

var arr1 = [5, 3, 8, 9];

var arr2 = arr1.map(function (val) {
    return val = val * 2;
});

console.log(arr2);          //[ 10, 6, 16, 18 ]
console.log(arr1);          //[ 5, 3, 8, 9 ]