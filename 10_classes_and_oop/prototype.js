let myName = "Rahul    ";


let myHero = ["Thor", "Hulk"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function() {
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.rahul = function() {
    console.log("Rahul is present in all object");
}

// heroPower.rahul();
// myHero.rahul();


// older syntax
const User = {
    name: 'rahul',
    email: "rahul@kk.com"
}

const Teacher = {
    makeVideos: true
};

const TeachingSupport = {
    isAvailable: false
};

const TASupport = {
    assingment: 'Js Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User;


// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);



String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`)
}

let userName = "Rahul";
userName.trueLength();
"Debarati     ".trueLength();