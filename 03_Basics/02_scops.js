let a = 10;
const b = 20;
// var c = 30;

if(true) {
    let a = 100;
    const b = 200;
    // var c = 300;
    // console.log("INNER: ",a)
    // console.log("INNER: ",b)
}

// console.log(a)
// console.log(b)
// console.log(c)


function one() {
    const username = "rahul";

    function two() {
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);
    two();
}

// one();

if(true) {
    const user = "rahul";
    if(user === "rahul") {
        const web = " youtube";
        // console.log(user + web);
    }
    // console.log(web);
}
// console.log(user);

// +++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++

console.log(addOne(4));

function addOne(num) {
    return num + 1;
}


// addTwo();

const addTwo = function(num) {
    return num + 2;
}

// addTwo();