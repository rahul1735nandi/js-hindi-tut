const User = {
    _email: 'rr.gogle.com',
    _password:'mypass',

    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {
        this._email = value
    }
}

const rahul = Object.create(User);
console.log(rahul.email);