class User {
    constructor(username) {
        this.username =  username;
    }

    logMe() {
        console.log("User name is ", this.username);
    }

    static createId() {
        return `123`;
    }
}

const rahul = new User('Rahul');
// console.log(rahul.createId());

class Teacher extends User {
    constructor(username,email) {
        super(username);
        this.email = email;
    }
}

const phone = new Teacher('phone', 'phone@.com');
console.log(phone.createId());