let a = 10;
const b = 20;
// var c = 30;

if(true) {
    let a = 100;
    const b = 200;
    // var c = 300;
    console.log("INNER: ",a)
    console.log("INNER: ",b)
}

console.log(a)
console.log(b)
// console.log(c)