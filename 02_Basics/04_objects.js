// const tinderUser1 = new Object();
const tinderUser1 = {};

tinderUser1.id = "rr12";
tinderUser1.name = "Rahul";
tinderUser1.isloogedIn = false;

// console.log(tinderUser1)


const regularUser = {
    email: "raa@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Rahul",
            lastName: "Nandi"
        }
    }
};

// console.log(regularUser?.fullName)
// console.log(regularUser?.fullName?.userFullName)
// console.log(regularUser?.fullName?.userFullName?.firstName)


const obj1 = {
    1: "a",
    2: "b"
};
const obj2 = {
    3: "c",
    4: "d"
};
const obj4 = {
    5: "e",
    6: "f"
};

// const obj3 = {obj1, obj2};

// const obj3 = Object.assign({}, obj1, obj2, obj4) // The {} inside assign is optional but it's a good pratice to provide an {}.

const obj3 = {...obj1, ...obj2, ...obj4};
// console.log(obj3);

const users = [
    {
        id: 11,
        name: "rr"
    },
    {
        id: 1,
        name: "rr"
    },
    {
        id: 1,
        name: "rr"
    }
];

// console.log(users[0].id);
console.log(tinderUser1);

console.log(Object.keys(tinderUser1));
console.log(Object.values(tinderUser1));
console.log(Object.entries(tinderUser1));

console.log(tinderUser1.hasOwnProperty('isloogedIn'))