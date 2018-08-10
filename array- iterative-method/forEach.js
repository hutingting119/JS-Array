//forEach() 为数组中的每个元素执行一次回调函数
//参数 array.forEach(function(currentValue,index,arr),thisValue);
//currentValue——必需，当前元素
//index——可选，当前元素的索引值
//arr——可选，当前元素所属的数组对象
//thisValue——可选，当执行回调 函数时用作this的值

var arr1 = [3, 7, 4, 9, 0];
arr1.forEach(function (e, i, a) {
    console.log(e, i, a)
});

console.log(arr1);

//3 0 [ 3, 7, 4, 9, 0 ]
//7 1 [ 3, 7, 4, 9, 0 ]
//4 2 [ 3, 7, 4, 9, 0 ]
//9 3 [ 3, 7, 4, 9, 0 ]
//0 4 [ 3, 7, 4, 9, 0 ]
// [ 3, 7, 4, 9, 0 ]

