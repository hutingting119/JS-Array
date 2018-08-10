//copyWithin()， 在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值
//copyWithin(target,start,end);
//target——复制开始插入的地方
//start——复制开始的元素位置
//end——复制结束的位置

var arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
arr1.copyWithin(3, 4, 5);

console.log(arr1);          //[ 1, 2, 3, 5, 5, 6, 7, 8 ]
console.log(arr1);          //[ 1, 2, 3, 5, 5, 6, 7, 8 ]