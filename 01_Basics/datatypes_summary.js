// ** Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
/*
const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

const id = Symbol('2610');
const anotherId = Symbol('2610');

// console.log(id === anotherId);

const bigNumber = 132435465764534231425346n;

*/

// ** Reference (Non primitive)

// Array, Objects, Functions

/*
const heros = ["Thor", "Hulk", "Ironman"];

const obj = {
    name: "Rahul",
    age: 24,
}

const myfunc = function() {
    console.log("Hello World");
}

console.log(typeof scoreValue); // number
console.log(typeof outSideTemp); // object
console.log(typeof anotherId); // symbol
console.log(typeof bigNumber); // bigint
console.log(typeof heros); // object
console.log(typeof myfunc); // function (but actually it is function object)
console.log(typeof obj); // object
*/

// +++++++++++++++++++++++++++++++++++++++++++++++

// Stack memory (Primitive), Heap memory (Non-primitive)

let myChannelName = "rahulnandidotcom";
let anotherName = myChannelName;

console.log(anotherName);
console.log(myChannelName);

anotherName = "coffee and code";

console.log(anotherName);
console.log(myChannelName);

let user1 = {
    name: "user",
    upi: "user@ybl"
}

let user2 = user1;

console.log(user1);
console.log(user2);


user2.name = "Rahul Nandi";
console.log(user1);
console.log(user2);

