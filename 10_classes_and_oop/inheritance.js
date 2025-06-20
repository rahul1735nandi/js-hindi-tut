class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log("User name is ", this.username)
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourses() {
        console.log("New course was added by ", this.username);
    }
}

const chai = new Teacher('chai', 'chai@teacher.com', '123');
// chai.addCourses();
// chai.logMe();

const masalaChai = new User('masalachai');
// masalaChai.logMe()

console.log( chai instanceof Teacher);
