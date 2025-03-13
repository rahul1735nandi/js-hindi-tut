const myNums = [1,2,3,4];
const initialValue = 0;
// const sumWithInitial = myNums.reduce((acc, cv) => {
//     console.log(`acc: ${acc} and cv: ${cv}`);
//     return acc + cv; 
// }, initialValue);
// console.log(sumWithInitial);


// const sumWithInitial = myNums.reduce((acc, cv) => acc + cv , initialValue);
// console.log(sumWithInitial);

const shoppingCard = [
    {
        item: "Samsung",
        price: "19999"
    },
    {
        item: "Apple",
        price: "29999"
    },
    {
        item: "Realme",
        price: "9999"
    },
];

const total = shoppingCard.reduce((acc, item) => {
    console.log(item.price);
    return parseInt(item.price) + acc
}, 0);
console.log(total);