// const promiseOne = new Promise(function(resolve, reject) {
//     // Do an async task
//     // DB calls, cryptography, network

//     setTimeout(function() {
//         console.log("Async task is completed");
//         resolve();
//     },1000);
// });

// promiseOne.then(function() {
//     console.log("Promise consumed");
// });

// new Promise((resolve, reject) => {
//     setTimeout(function() {
//         console.log("Async task 2");
//         resolve();
//     }, 1000);
// }).then(() => console.log("Async 2 resolved"));


// const promiseThree = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve({name: 'Rahul', email: 'rahul@gmail.com'})
//     }, 1000)
// });

// promiseThree.then(function(user) {
//     console.log(user);
// });

// const promiseFour = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         let error = true;
//         if(!error) {
//             resolve({name: "Debarati", pass: "123"})
//         }
//         else {
//             reject('ERROR: Something went wrong');
//         }
//     }, 1000);
// });

// promiseFour
//     .then((user) => {
//         console.log(user);
//         return user?.name;
//     })
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((e) => {
//         console.log(e);
//     })
//     .finally(() => console.log("The promise is either resolved or rejected"));


// const promiseFive = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         let error = true;
//         if(!error) {
//             resolve({name: "Javascript", pass: "123"})
//         }
//         else {
//             reject('ERROR: JS went wrong');
//         }
//     }, 1000);
// });

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive;
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// };

// consumePromiseFive();


// // async function getAllUsers() {
// //     try {
// //         const response = await fetch('https://jsonplaceholder.typicode.com/users');
// //         const data = await response.json();
// //         console.log(data);
// //     } catch (error) {
// //         console.log(error);
// //     }
// // }

// // getAllUsers();


// fetch('https://jsonplaceholder.typicode.com/users')
// .then((data) => {
//     return data.json();
// })
// .then((response) => {
//     console.log(response);
// })
// .catch((err) => console.log(err));


// fetch('https://jsonplaceholder.typicode.com/users', {
//     method: 'GET',
//     headers: {
//         "Content-Type": "application/x-www-form-urlencoded"
//     }
// }).then((data) => {
//     return data.json();
// }).then((user) => {
//     console.log(user)
// }).catch(() => console.log("Error"));


async function getData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'GET',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });
        const data = await response.json();
        console.log("data => ",data);
    } catch (error) {
        console.log(error)
    }
}

getData();