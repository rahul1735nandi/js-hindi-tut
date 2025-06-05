const user = {
    userName: "Rahul",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function() {
        // console.log("Got user details from database");
        // console.log(`User Name: ${this.userName}`);
        console.log(this);
    }
}

// console.log(user['getUserDetails']());
// console.log(user.getUserDetails());
console.log(this);


const user2 = {
    userName: "Debarati",
    loginCount: 11,
    signedIn: true,
    getUserDetails: function() {
        // console.log("Got user details from database");
        // console.log(`User Name: ${this.userName}`);
        console.log(this);
    }
}


const promiseOne = new Promise;
const promiseTwo = new Date();