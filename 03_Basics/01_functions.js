// function addTwoNumbers(num1, num2) { // num1 and num2 are parameters 
//     console.log(num1 + num2);
// };

// addTwoNumbers(3, 4); // 3 and 4 are arguments

function addTwoNumbers(num1, num2) {
    // let result = num1 + num2;
    // return result;
    return  num1 + num2;
};

const res = addTwoNumbers(3, 4);
// console.log("Result: ",res);

function loginUserMsg(username) {
    if(username && typeof username === "string") {
        return `Welcome ${username}`;
    };
    return "Please enter a username";
};

// console.log(loginUserMsg(3));

// function calculateCartPrice(...n1) {
//     return n1;
// };

// console.log(calculateCartPrice(100,200,300));

function calculateCartPrice(val1, val2, ...n1) {
    return n1;
};

// console.log(calculateCartPrice(100, 200, 300, 400));


const user = {
    username: "Rahul",
    prices: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject?.username} and price is ${anyobject?.price}`)
};

// handleObject(user);
handleObject({
    username: "user1",
    price: 999
});

const newArr = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[1];
};

// console.log(returnSecondValue(newArr));
console.log(returnSecondValue([300, 500]));
