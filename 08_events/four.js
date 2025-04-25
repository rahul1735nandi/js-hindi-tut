const randomColor = function() {
    const hexColor = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++) {
        color += hexColor[Math.floor(Math.random() * 16)];
    }
    return color;
}

// console.log(Math.floor(Math.random() * 16));

let intervalId;
const startChangingColor = function() {
    if(!intervalId) {
        intervalId = setInterval(() => {
            document.body.style.backgroundColor = randomColor();
        }, 1000)
    }
}

const intervalIdColor = function() {
    clearInterval(intervalId)
    intervalId = null;
}

document.getElementById('start').addEventListener("click", startChangingColor);

document.getElementById('stop').addEventListener("click", intervalIdColor);