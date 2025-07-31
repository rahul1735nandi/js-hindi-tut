class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get password() {
        return this._password.toUpperCase();
    }

    set password(value) {
        this._password = value;
    }
}

const rahul = new User("r@rahul.ai", "abc");
console.log(rahul.password);