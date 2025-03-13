// const coding = ["js", "cpp", "rb", "py", "java"];

// const values = coding.forEach((item) => {
//     // console.log(item);
//     return item
// });

// console.log(values);


const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.filter((num) => {
//     if(num > 4){
//         return num;
//     }
// }); 
/*
The filter() function in JavaScript is a method available on arrays that creates a new array containing elements that satisfy a specified condition. It does not modify the original array.
*/
// console.log(newNums);

// const newNums = [];

// myNums.forEach((num) => {
//     if(num > 5) {
//         newNums.push(num);
//     }
//     return newNums;
// });

// console.log(newNums); // We can filter the same using forEach like this

const books = [
    {title: 'Book One', genre: 'History', publish: 1981, edition: 2004},
    {title: 'Book Two', genre: 'Non-Fiction', publish: 1991, edition: 2008},
    {title: 'Book Three', genre: 'History', publish: 1921, edition: 2014},
    {title: 'Book Four', genre: 'Non-Fiction', publish: 1951, edition: 2010},
    {title: 'Book Five', genre: 'Science', publish: 1941, edition: 1996},
    {title: 'Book Six', genre: 'Fiction', publish: 1911, edition: 2006},
    {title: 'Book Seven', genre: 'History', publish: 1971, edition: 2016},
    {title: 'Book Eight', genre: 'Geography', publish: 1991, edition: 2000}
];

const historyBook = books.filter((bk) => bk.genre === "History" );
// console.log(historyBook);

const userBook = books.filter((bk) => {
    return bk.edition >= 2000 && bk.genre === "Fiction"
} );
console.log(userBook);
