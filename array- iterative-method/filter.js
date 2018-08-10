//filter() 将所有过滤函数中返回true的数组元素放进一个新数组中并返回

var arr1 = [3, 6, 4, 9, 16];

var arr2 = arr1.filter(function (val) {
    return val % 2 === 0;
});

console.log(arr2);              //[ 6, 4, 16 ]
console.log(arr1);              //[ 3, 6, 4, 9, 16 ]