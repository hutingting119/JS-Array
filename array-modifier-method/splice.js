//splice()，在任意位置给数组添加或删除任意元素 
//使用方法：splice(index,howmany,item,...item)
//参数：index——必需，元素开始修改的地方  howmany——必需，元素删除个数  item...item——可选，新增元素

var arr1 = [3,7,9,14];
var arr2 = [3,7,9,14];
var arr3 = [3,7,9,14];

console.log(arr1.splice(1,0,'a','b'));          //[]
console.log(arr1);                              //[ 3, 'a', 'b', 7, 9, 14 ]
console.log(arr2.splice(0,2,'hi'));             //[ 3, 7 ]
console.log(arr2);                              //[ 'hi', 9, 14 ]
console.log(arr3.splice(0,1));                  //[3]
console.log(arr3);                              //[ 7, 9, 14 ]