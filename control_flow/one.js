// const isUserLoggedIn = true;
// const temperatur = 41;

// if(temperatur < 50) {
//     console.log("less than 50");
// }
// else {
//     console.log("greater than 50");
// }
// console.log("Executed");

// <, >, <=, >=, ==, !=,  ===, !==

// const score = 200;

// if(score > 100) {
//     let power = "fly";
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000;

// if(balance > 500) console.log("test") // This is called implecit scope

// if(balance < 500) {
//     console.log("less than 500");
// }
// else if(balance < 750) {
//     console.log("less than 750");
// }
// else if(balance < 900) {
//     console.log("less than 900");
// }
// else {
//     console.log("less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;


if(userLoggedIn && debitCard && 2==3) {
    console.log("Allow to shopping");
}

if(loggedInFromGoogle || loggedInFromEmail || 2==3) {
    console.log("User logged in")
}

