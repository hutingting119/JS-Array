//sort()，对数组进行排序

var arr1 = ['c','a','d','b'];
var arr2 = [4,7,1,9,12,0];

console.log(arr1.sort());                           //[ 'a', 'b', 'c', 'd' ]
console.log(arr1);                                  //[ 'a', 'b', 'c', 'd' ]
console.log(arr2.sort(function(a,b){return a-b}));  //[ 0, 1, 4, 7, 9, 12 ]
console.log(arr2);                                  //[ 0, 1, 4, 7, 9, 12 ]