// **Note: If objects are created using literals then it is not singleton. 
//   If objects are created using constructor then it is singleton

// Singleton

// Object.create(); // If objects are create in this way it is known as 
// using the constructor method


// object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Rahul",
    "fullName": "Rahul Nandi",
    [mySym]: "myKey1",
    age: 25,
    location: "Kolkata",
    email: "rahul@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}

// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser["fullName"]);
// console.log(typeof JsUser.mySym);
// console.log(JsUser);

JsUser.email = "rahul@google.com"
// console.log(JsUser);

// Object.freeze(JsUser);
JsUser.email = "rahul@mcf.com"
// console.log(JsUser);

// JsUser.gameName = "Ghoster";
// console.log(JsUser)

JsUser.greeting = function() {
    console.log("Welcome Rahul");
};

JsUser.greeting2 = function() {
    console.log(`Hello ${this.name}`);
};

// // console.log(JsUser)
// console.log(JsUser.greeting)
console.log(JsUser.greeting())
console.log(JsUser.greeting2())