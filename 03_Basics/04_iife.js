/* Immediately Invoked Function Expression (IIFE) 

Note:- IIFE is used for several reasons, primarily to avoid polluting the global scope and to create private scopes. 
*/

// function chai() {
//     console.log("db connected");
// }
// chai(); // normal function

// (function chai() {
//     console.log("db connected");
// })();  // The function has a name called chai that's why it's called named IIFE


// ((name) => {
//     console.log(`${name} DB CONNECTED`)
// })("User"); // IIFE


/*
function normalFunction() {
    let message = "Hello from normal function!";
    console.log(message);
}

normalFunction();

function normalFunction() {
    console.log("This can be overwritten!");
}

normalFunction();

Note: normalFunction can be overwritten
*/

/*
(function () {
    let message = "Hello from IIFE!";
    console.log(message);
})();

Note: By using IIFE we prevent the function to be overwritten.
*/