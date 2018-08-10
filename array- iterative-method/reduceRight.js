//reduceRight()，类似reduce，只是数组从右到左开始遍历

var arr1 = [6, 4, 3, 9, 9, 0, 13];
var arr2 = [4, 6, 'h', 8, 'i', 6, 14];
var tag1 = arr1.reduceRight(function (total, num) {
    return total + num
});
var tag2 = arr2.reduceRight(function (total, num) {
    return total + num
});

console.log(tag1);               //44
console.log(arr1);               //[ 6, 4, 3, 9, 9, 0, 13 ]
console.log(tag2);               //20i8h64
console.log(arr2);               //[ 4, 6, 'h', 8, 'i', 6, 14 ]