const myArr = [2,4,7,3,1];
const heros = ["thor", "hulk", "ironman"];

const arr2 = new Array(6, 7, 8);
// console.log(myArr[1]);

// Array methods

// myArr.push(6); // add 8 to the end of the array
// myArr.push(7);
// console.log(myArr);
// myArr.pop(); // remove the last  element from the array
// console.log(myArr);

// myArr.unshift(8); // add 8 to the begginning of the array
// console.log(myArr);
// myArr.shift(); // remove the first element from the array
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.includes(4));

// console.log(myArr.indexOf(10)); // return -1 beaucse the element is not present
// console.log(myArr.indexOf(4)); // return the index number of the element

// console.log(myArr)
// console.log(typeof myArr)
// const newArr = myArr.join("?");
// console.log(newArr);
// console.log(typeof newArr);

// slice, splice

// console.log("A ",myArr);

// // const myArr1 = myArr.slice(0, 3); // slice the array and return 0-2 index's value excluding the end index's  value

// const myn1 = myArr.slice(-4, -1); // if negative value is provided it will start slicing from the end of the array

// //  2,  4,  7,  3,  1
// //  0   1   2   3   4
// // -5  -4  -3  -2  -1

// console.log(myn1); // return the sliced array excluding the end index value

// console.log("B ",myArr); // will get the entire array because slice will not make changes on the original array

// console.log("A ",myArr);

// const myn2 = myArr.splice(0, 3); // splice will make changes on the original array

// console.log(myn2); // return an array of deleted elements

// console.log("B ",myArr); // here the array will be [3, 1] because splice deleted the elements from the original array