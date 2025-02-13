const name = "rahul";
const repoCount = 50;
// console.log(name +" "+repoCount);

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Ghoster-bgmi'); // another way to declare a string
// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toLocaleLowerCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.toLocaleUpperCase());
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf("h"));

// const newStr = gameName.substring(0, 7); // end index character will not be included also we cannot provide negative values
// console.log(newStr);

/*
// G    h    o    s    t    e    r    -    b    g    m     i
// 0    1    2    3    4    5    6    7    8    9    10    11
// -12 -11  -10  -9   -8   -7   -6   -5   -4   -3   -2    -1             
// const anotherString = gameName.slice(0, 5);
console.log(gameName.length);

const anotherString = gameName.slice(-5, 10);
console.log(anotherString);
*/


// const userName = "        user           ";
// console.log(userName)
// console.log(userName.trim());
// console.log(userName.trimEnd());
// console.log(userName.trimStart());

// const url = "https://rahul.com/rahul%20nandi";
// console.log(url.replace("%20", "-"));
// console.log(url.includes("rahul"));

const dummy = "rahul-nandi-debarati-biswas";
console.log(dummy.split("-", 2));