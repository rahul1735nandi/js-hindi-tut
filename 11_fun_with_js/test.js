// const myArr = [];
// %DebugPrint(myArr);

// Continous, Holey (There is two types of Array "Continous" and "Holey")

// SMI (Small Integer)
// Packed element
// Double (float, string, function)


const arrTwo = [1,2,3,4,5]; // Packed SMI Elements

arrTwo.push(6.0) // Packed Double Elements

arrTwo.push("7") // Packed Elements

arrTwo[10] = 11; // Holey Elements

// console.log(arrTwo);
// console.log(arrTwo.length);
// console.log(arrTwo[9]);
// console.log(arrTwo[19]);

// bound check
// hasOwnProperty(arrTwo, 9);
// hasOwnProperty(arrTwo.prototype, 10);
// hasOwnProperty(Object.prototype, 10);

// holes are very expensive in JS

const arrThree = [1,2,3,4,5];
console.log(arrThree[2]);

// SMI > DOUBLE > PACKED

// H_SMI > H_DOUBLE > H_PACKED