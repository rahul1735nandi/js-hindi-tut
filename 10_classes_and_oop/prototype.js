let myHeros = ["thor", "spiderman"];

let heroPwer = {
    thor: "hammer",
    "spiderman": "sling",
    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
    }
};

Object.prototype.rahul = function() {
    console.log("Rahul is present in all object");
}

// heroPwer.rahul();
// myHeros.rahul();

Array.prototype.greet = function () {
    console.log("Good evening");
}

// myHeros.greet();


// const Teacher = {
//     makeVideo: true,
//     __proto__: myHeros
// }

// Teacher.greet();


// old syntax
const User = {
    username: "chai",
    email: "cha@jcs.com"
}

const Teacher = {
    makeVideo: true
};

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fulltime: true,
    // __proto__: TeachingSupport
}

// TASupport.__proto__ = TeachingSupport; // we can do in both ways we can add inside the object or outside the object as well

Teacher.__proto__ = User;


// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

// TeachingSupport -> Child
// Teacher -> Parent


String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}

"Debarati   ".trueLength();

let username = " Rahul ";
username.trueLength();