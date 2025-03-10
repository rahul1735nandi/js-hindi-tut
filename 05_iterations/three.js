// for of

const myArr = [1, 2, 3, 4, 5]

for (const num of myArr) {
    // console.log(num);
}

const greetings =  "Hello World!"

for (const greet of greetings) {
    if(greet === " ") {
        continue;
    }
    // console.log(`Each char: ${greet}`);
}

// Maps

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of Amerca");
map.set("FR", "France");
map.set("IN", "India");
// console.log(map);

for (const key of map) { // It will print all together like // [ 'IN', 'India' ] or [ 'FR', 'France' ]
    // console.log(key);
}

for (const [key, value] of map) {  // to print the key and values seperate we can use destructure like this
    // console.log(`${key} => ${value}`);
}

const obj = {
    name: "Rahul",
    age: 23
}

// for (const element of obj) {  // we cannot use for of to iterate object
//  console.log(element);
// }

