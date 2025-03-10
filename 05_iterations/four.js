//for in

const myObj = {
    js: "Javascript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift byt Apple"
}

for (const key in myObj) {
    // console.log(`${key}: shortcut is for ${myObj[key]}`);
}

const programming = ["js", "cpp", "rb", "py", "java"]

for (const key in programming) {
    // console.log(programming[key]);
}

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of Amerca");
map.set("FR", "France");
map.set("IN", "India");

// for (const key in map) {   // we cannot iterate over map like this
//     console.log(map[key]);
// }