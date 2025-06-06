const user = {
    userName: "Rahul",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function() {
        // console.log("Got user details from database");
        // console.log(`User Name: ${this.userName}`);
        // console.log(this);
    }
}

// console.log(user['getUserDetails']());
// console.log(user.getUserDetails());
// console.log(this);



function User(userName, loginCount, isLoggedIn) {
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function() {
        console.log(`Welcome ${this.userName}`);
    }

    // return this; // return is implicitly defined
}

const user1 = new User("Sanu", 10, true);
const user2 = new User("Deba", 12, true);
// console.log(user1.constructor);
console.log(user2);
console.log(user2 instanceof User);
console.log(user2 instanceof Object);