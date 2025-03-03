const user = {
    name: "rahul",
    price: 999,
    welcoeMsg: function() {
        console.log(`${this.name} , welcome to website`);
        console.log(this);
    }
}

// user.welcoeMsg();
// user.name = "debarati";
// user.welcoeMsg();

// console.log(this);

// function chai() {
//     let username = "rahul";
//     console.log(this.username)
//     console.log(this);
// }

// chai();

// const chai = function chai() {
//   let username = "rahul";
//   console.log(this.username)
//   console.log(this);
// };

// chai();

const chai = () => {
    let username = "rahul";
//  console.log(this.username)
//  console.log(this)
}

// chai();


// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// const addTwo = (num1, num2) => num1 + num2; // This is called implicit return means a function automatically returns a value without using the return keyword

// const addTwo = (num1, num2) => (num1 + num2); // This is also called implicit return

const addTwo = (num1, num2) => ({username: "debarati"}); // To return a object we need to follow this syntax and This is also called implicit return

// console.log(addTwo(3, 4));
// console.log(addTwo());


const myArr = [2,5,4,7,1];
myArr.forEach((val) => {
    console.log(val * val);
})