// ES6

// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.password = password;
//         this.email = email;
//     }

//     encryptPassword() {
//         return `${this.password}abc`;
//     }

//     changeUsername() {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User('chai', 'chain@gmail.com', '123');

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

function User(username, email, password) {
    this.username = username;
    this.password = password;
    this.email = email;
}

User.prototype.encryptPassword = function() {
     return `${this.password}abc`;
}
User.prototype.changeUsername = function() {
     return `${this.username.toUpperCase()}`
}

const tea = new User('tea', 'tea@gmail.com', '456');
console.log(tea.encryptPassword())
console.log(tea.changeUsername())