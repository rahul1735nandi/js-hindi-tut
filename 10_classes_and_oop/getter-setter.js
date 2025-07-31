class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email() {
        return `${this._email}123`;
    }

    set email(value) {
        this._email = value;
    }

    get password() {
        return `${this._password}000`;
    }

    set password(value) {
        this._password = value;
    }
}

const rahul = new User("r@rahul.ai", "abc");
console.log(rahul.password);