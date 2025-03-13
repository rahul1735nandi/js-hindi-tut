const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNum = myNums.map((num, value) => num + 10);
// console.log(newNum);

// const newNum = [];

// myNums.forEach((num) => {
//     newNum.push(num + 10);
// })
// console.log(newNum);


const newNums = myNums
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter((num) => num >= 51)  // this is called chaining
console.log(newNums);
