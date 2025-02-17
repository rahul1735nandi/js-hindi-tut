let myDate = new Date();

// console.log(myDate); // 2025-02-16T05:33:34.244Z
// console.log(myDate.toString()); // Sun Feb 16 2025 05:33:34 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toDateString()); // Sun Feb 16 2025
// console.log(myDate.toISOString()); // 2025-02-16T05:33:34.244Z
// console.log(myDate.toLocaleString()); // 2/16/2025, 5:33:34 AM
// console.log(myDate.toLocaleDateString()); // 2/16/2025
// console.log(myDate.toJSON()); // 2025-02-16T05:33:34.244Z
// console.log(myDate.toLocaleTimeString()); // 5:33:34 AM
// console.log(myDate.toTimeString()); // 05:33:34 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.to);

let formatedDate = myDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
});

// console.log(formatedDate);

// console.log(typeof myDate);

// let createdDate = new Date(2025, 0, 9, 18, 4);
// console.log(createdDate.toLocaleString());

// let date1 = new Date("2025-01-14");
let date1 = new Date("01-14-2025");
// console.log(date1.toLocaleString());

let timeStamp = Date.now();
// console.log(timeStamp);
// console.log(date1.getTime()); // provide miliseconds

// console.log(Math.floor(Date.now()/1000)); // converting miliseconds to seconds

let d2 = new Date();
// console.log(d2.getDay()); // return day sunday is 1, monday is 2 and so on
// console.log(d2.getMonth() + 1); // montth s start with 0 so we are addin +1.
// console.log(d2.getFullYear());

let d3 = d2.toLocaleString('default', {
    weekday: "narrow",  
});

// console.log(d3);

// let customDate = new Date();
// console.log(customDate);
// // let formatedDate1 = customDate.toISOString().split("T")[0];
// let formatedDate1 = customDate.toISOString();
// console.log(formatedDate1);
// let a1 = customDate.toISOString().split("T");
// console.log(a1);
// let a2 = customDate.toISOString().split("T")[0];
// console.log(a2);

let res = "205-02-17";
let convDate = new Date(res);
let formated = convDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
});

console.log(formated);
