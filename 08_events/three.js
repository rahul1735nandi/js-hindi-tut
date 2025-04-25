const sayDate = function() {
    console.log("Rahul ", Date.now())
}

let st;

document.querySelector('#start').addEventListener("click", (e) => {
    st = setInterval(sayDate, 2000, "Hello");
})

document.querySelector('#stop').addEventListener("click", (e) => {
    clearInterval(st);
})