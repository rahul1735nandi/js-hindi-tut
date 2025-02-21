const marvel = ["thor", "ironman", "hulk"];
const dc = ["superman", "batman", "flash"];

// marvel.push(dc);
// console.log(marvel);
// console.log(marvel[3][1]);

// const heros = marvel.concat(dc);
// console.log(heros);

const allHeros = [...marvel, ...dc];
// console.log(allHeros);

const anotherArr = [2, 3, 4, [4, 5, 6], 7, [1, 5, [8,9]]];

const useArr = anotherArr.flat(Infinity);
// console.log(useArr);

// isArray() method

// console.log(Array.isArray("Rahul"));

// console.log(Array.isArray([])); // true
// console.log(Array.isArray("[]")); // false
// console.log(Array.isArray(new Array(3))); // true


const arr = new Array(4).fill(3, 2, );
// console.log(arr);

// Array.from method

// console.log(Array.from("Rahul"));
// console.log(Array.from({
//     name: "Rahul"
// })); // interesting

// console.log(Array.from([1,2,3], (x) => x + x));


// Array.of method

// let score1 = 100;
// let score2 = 200;
// let score3 = 300;
// console.log(Array.of(score1, score2, score3));

let score1 = [100, 125, 150];
let score2 = [200, 225, 250];
let score3 = [300, 325, 350];
console.log(Array.of(score1, score2, score3));