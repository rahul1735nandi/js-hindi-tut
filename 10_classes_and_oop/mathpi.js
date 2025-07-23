const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const myNewObj =  {
    name: "ginger chai",
    price: 250,
    isAvailable: true,
    orderChai: function() {
        console.log("order not placed");
    }
};

// console.log(Object.getOwnPropertyDescriptor(myNewObj, "name"));

// Object.defineProperty(myNewObj, "name", {
//     writable: false,
//     enumerable: false,
//     configurable: true
// });

// console.log(Object.getOwnPropertyDescriptor(myNewObj, "name"));

// myNewObj.name = "masala chai";
// console.log(myNewObj);

// for (let [key, value] of Object.entries(myNewObj)) {
//     if(typeof value !== 'function') {
//         console.log(`${key}: ${value}`);
//     }
// }


const descriptors = Object.getOwnPropertyDescriptors(myNewObj);
// console.log(descriptors);

Object.defineProperties(myNewObj, {
    name: {
        value: 'ginger chai',
        writable: false,
        enumerable: false,
        configurable: true
    },
    price: {
        value: 250,
        writable: false,
        enumerable: false,
        configurable: true
    },
    isAvailable: {
        value: true,
        writable: false,
        enumerable: true,
        configurable: true
    },
});

for (let [key, value] of Object.entries(myNewObj)) {
    if(typeof value !== 'function') {
        console.log(`${key}: ${value}`);
    }
}

myNewObj.name = "green tea";
myNewObj.price = 350;
console.log(`Name: ${myNewObj.name}, Price: ${myNewObj.price}`);