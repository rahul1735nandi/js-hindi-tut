// for each

const coding = ["js", "cpp", "rb", "py", "java"];

// coding.forEach(function (element) {
//     console.log(element);
// })

// coding.forEach((element) => {
//     console.log(element);
// });

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe); // we need to provide only the function reference


// coding.forEach((item, index, arr) => {
//     console.log(`${item}: ${index}: ${arr}`);
// })


const myCoding = [
    {
        ln_name: "Javascript",
        ln_fileName: "js"
    },
    {
        ln_name: "C++",
        ln_fileName: "cpp"
    },
    {
        ln_name: "Python",
        ln_fileName: "py"
    }
];

myCoding.forEach((value) => {
    // console.log(value);
    // console.log(value.ln_name);
})


const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");
map.set("IN", "India");

map.forEach((value, key) => {
    console.log(`${key} : ${value}`);
})