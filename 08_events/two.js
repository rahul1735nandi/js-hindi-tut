const sayRahul = function() {
    console.log("Rahul "+ Date.now());
}

const changeH1 = function() {
    document.querySelector('h1').innerHTML = `Best JS Series`;
}

const changeMe = setTimeout(changeH1, 2000);

document.querySelector('#stop').addEventListener("click", (e) => {
    clearTimeout(changeMe);
    console.log("STOPPED");
});
