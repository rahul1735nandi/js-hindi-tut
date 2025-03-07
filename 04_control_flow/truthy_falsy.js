// const userEmail = "ra@ai.com";
// const userEmail = "";
// const userEmail = [];
// if(userEmail) {
//     console.log("Got the email");
// }
// else {
//     console.log("Don't have a user email");
// }


// Falsy values

// false, 0, -0, bigInt 0n, "", null, undefined, NaN

// *Note: Except these falsy values alll the other values are truthy

// Some examples of truthy values

// "0", "false", " ", [], {}, function(){}

// *Note: If a functon is declare in this way =>  function(){}, then it is called empty function and it also a truthy value


// if(userEmail.length === 0) {
//     console.log("Array is empty");
// }


// const emptyObj = {};

// if(Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }


// Nullish Coalescing Operator (??): null and  undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 30 ?? 20;


// console.log(val1);

// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice > 80 ? console.log("greater than 80") : console.log("less thn 80");