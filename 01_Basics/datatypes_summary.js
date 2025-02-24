// ** Primitive

//** Note: in JavaScript, all primitive types are call by value. This means that when you copy a primitive value, you do not get a reference to the original value, but instead, you get a separate copy. Any changes you make will only affect the copied value, not the original.

// let a = 10;
// let b = a;  // Copy of 'a' is assigned to 'b'

// b = 20;     // Changing 'b' does not affect 'a'

// console.log(a); // Output: 10 (unchanged)
// console.log(b); // Output: 20



// 7 Primitive Data types are : String, Number, Boolean, null, undefined, Symbol, BigInt


// const score = 100;
const scoreValue = 100.3;

// const isLoggedIn = false;
const outSideTemp = null;
// let userEmail;

// const id = Symbol('2610');
const anotherId = Symbol('2610');

// console.log(typeof id);
// console.log(id === anotherId);

const bigNumber = 132435465764534231425346n;


// ** Reference (Non primitive)

// **Note: Unlike primitive types, objects and arrays are stored by reference. When you assign an object to another variable, both variables point to the same memory location.

// let obj1 = { name: "Alice" };
// let obj2 = obj1;  // Reference to the same object, NOT a copy
// console.log(obj1.name);
// console.log(obj2.name);

// obj2.name = "Bob"; // Changing obj2 also affects obj1

// console.log(obj1.name); // Output: "Bob"
// console.log(obj2.name); // Output: "Bob"

// Array, Objects, Functions


const heros = ["Thor", "Hulk", "Ironman"];

const obj = {
    name: "Rahul",
    age: 24,
}

const myfunc = function() {
    console.log("Hello World");
}

// console.log(typeof scoreValue); // number
// console.log(typeof outSideTemp); // object
// console.log(typeof anotherId); // symbol
// console.log(typeof bigNumber); // bigint
// console.log(typeof heros); // object
// console.log(typeof myfunc); // function (but actually it is function object)
// console.log(typeof obj); // object


// +++++++++++++++++++++++++++++++++++++++++++++++

// Stack memory (Primitive), Heap memory (Non-primitive)

// let myChannelName = "rahulnandidotcom";
// let anotherName = myChannelName;

// console.log(anotherName);
// console.log(myChannelName);

// anotherName = "coffee and code";

// console.log(anotherName);
// console.log(myChannelName);

// let user1 = {
//     name: "user",
//     upi: "user@ybl"
// }

// let user2 = user1;

// console.log(user1);
// console.log(user2);


// user2.name = "Rahul Nandi";
// console.log(user1);
// console.log(user2);

