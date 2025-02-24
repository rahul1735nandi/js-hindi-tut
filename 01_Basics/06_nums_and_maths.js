const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);
// console.log(typeof balance);

// console.log(balance.toString());
// console.log(balance.toFixed(3)); // how many numbers we want after decimal

// **Note: The .toFixed() method formats a number to a fixed number of decimal places and returns it as a string.

const n1 = 123;

// console.log("fixed => ",n1.toFixed(2));
// console.log("pricision => ",n1.toPrecision(2));

// console.log("fixed => ",n1.toFixed(4));
/*
=>  Ensures exactly 4 decimal places.
=>  Adds trailing zeros if necessary.
=>  Does not change the integer part.
*/
// console.log("pricision => ",n1.toPrecision(4));

/*
=> Ensures a total of 7 significant digits (not just decimals).
=> 123 already has 3 significant digits, so 4 more digits are added as 
   decimals.
=> Does not force 7 decimal places like toFixed(7), but ensures the total 
   precision.
*/

// const n2 = 1000000;
// console.log(n2.toLocaleString('en-IN'));


// ++++++++++++++++++++ Maths +++++++++++++++++++++++

// console.log(Math);

// console.log(Math.abs(-4));
// console.log(Math.round(4.67));
// console.log(Math.floor(4.67));
// console.log(Math.ceil(4.24));
// console.log(Math.sqrt(36));

// console.log(Math.min(32,13,67,23,75));
// console.log(Math.max(32,13,67,23,75));

// console.log(Math.random());

// console.log((Math.random() * 10) + 1);
// console.log(Math.floor(Math.random() * 10) + 1);

// const min = 10;
// const max = 20;

// console.log(Math.floor(Math.random() * (max - min + 1)) + min);

const min = 1;
const max = 6;

// console.log(Math.ceil(Math.random() * (max - min + 1)));


// console.log(Math.floor((Math.random() * (max - min + 1))) + min)