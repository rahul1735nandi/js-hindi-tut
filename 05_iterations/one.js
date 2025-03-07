// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);
}


for (let i = 1; i <= 3; i++) {
    // console.log(`Outer loop : ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop : ${j} and inner loop ${i}`);
        // console.log(i + " * " + j +" = "+ i*j);
    }
}


const myArray = ["Thor", "Hulk", "Ironman", "Spiderman", "Captain America"];

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}


// break and continue

// for (let i = 1; i <= 20; i++) {
//     if(i == 5) {
//         console.log("5 is detected");
//         break;
//     }
//     console.log(`Value of i: ${i}`);
// }


for (let i = 1; i <= 20; i++) {
    if(i == 5) {
        console.log("5 is detected");
        continue;
    }
    console.log(`Value of i: ${i}`);
}