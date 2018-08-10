//array.form() 方法从一个类似数组或可迭代对象中创建一个新的数组实例
var arr1 = {
    '0': 'c',
    '1': 'd',
    '2': 'f',
    length: 3
};
var str = 'hello';
var arr2 = [6, 4, 2];

var put1 = Array.from(arr1);
var put2 = Array.from(str);
var put3 = Array.from(arr2, x=>x + x);

console.log(put1);          //[ 'c', 'd', 'f' ]
console.log(arr1);          //{ '0': 'c', '1': 'd', '2': 'f', length: 3 }
console.log(put2);          //[ 'h', 'e', 'l', 'l', 'o' ]
console.log(str);           //hello
console.log(put3);          //[ 12, 8, 4 ]
console.log(arr2);          //[ 6, 4, 2 ]