var arr1 = [1,2,3,]
var arr2 = ["a","b","c",]
console.log(typeof arr1[0],arr1[0],typeof arr2[0],arr2[0]);

var arr3 = []; 
arr3 = [arr1[0],arr1[1],arr1[2],arr2[0],arr2[1],arr2[2]];
console.log(arr3);

console.log(typeof arr3[0],arr3[0],typeof arr3[3],arr3[3]);

console.log(typeof arr3);

console.log(arr3.length);

var arr3 = [1, 2, 3, "one", "two", "three"];
var arr3Reverse = arr3.reverse(); 
console.log(arr3Reverse);
var arrDelet = arr3Reverse.splice(0,3);
console.log(arrDelet);

var arrword = []
arrword = arrDelet.join('');
console.log(arrword);

var newarr = [3,5,7,]
newarr.unshift(100)
newarr.push(1)
console.log(newarr);
newarr.sort();
console.log(newarr);
newarr.sort(function(a, b) {
    return a - b;
  });
  console.log(newarr);
