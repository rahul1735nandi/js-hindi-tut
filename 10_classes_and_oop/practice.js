// **Abstraction example

class Car {
  #engineStatus = false; // private field

  startEngine() {
    this.#engineStatus = true;
    console.log("Engine started");
  }

  getEngineStatus() {
    return this.#engineStatus;
  }
}

const myCar = new Car();
myCar.startEngine();
console.log(myCar.getEngineStatus());
// console.log(myCar.#engineStatus); // error


// **Encapsulation example

class User {
  #password; // private field

  constructor(username, password) {
    this.username = username;
    this.#password = password;
  }

  checkPassword(pwd) {
    return this.#password === pwd;
  }
}

const user = new User('rahul', 'secret123');
console.log(user.username);
// console.log(user.#password); // error

// **Polymorphism example
/*
class Animal {
  speak() {
    console.log("The animal makes a sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("The dog barks");
  }
}

class Cat extends Animal {
  speak() {
    console.log("The cat meows");
  }
}

const animals = [new Dog(), new Cat(), new Animal()];

animals.forEach(animal => animal.speak());
*/

// **Inheritance

class Animal {

    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks`);
    }
}

const dog = new Dog('Goofy');
dog.speak();