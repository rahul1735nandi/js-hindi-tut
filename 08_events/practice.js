/*
function getEventType(event) {
    const log = document.getElementById('log');
    log.innerText = `${event.type}\n${log.innerText}`;
}
*/

/*
//Keyboard events
document.addEventListener('keydown', getEventType, false);
document.addEventListener('keyup', getEventType, false);
document.addEventListener('keypress', getEventType, false);

//Mouse events
document.addEventListener('mousedown', getEventType, false);
document.addEventListener('mouseup', getEventType, false);
document.addEventListener('click', getEventType, false);

*/
/*
function getTime(event) {
    const time = document.querySelector('#time');
    // console.log("First child => ",time.firstChild);
    // console.log(time.firstChild.nodeValue);
    time.firstChild.nodeValue = event.timeStamp;
}
document.body.addEventListener('click', getTime, false);
*/

/*

// document.querySelector('a').addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(e.target.tagName);
// })

function stopLink(event) {
    event.preventDefault();
}

function logClick(event) {
    const log = document.getElementById('log');
    if(event.target.tagName === "A") {
        log.innerText = event.defaultPrevented ? `Sorry, but you cannot visit this link!\n${log.innerText}`: `Visiting link…\n${log.innerText}`;
    }
}

const a = document.getElementById('link1');
a.addEventListener('click', stopLink);
document.addEventListener('click', logClick);
*/

/*
const ul = document.createElement('ul');
document.body.appendChild(ul);

const li1 = document.createElement('li');
li1.appendChild(document.createTextNode('list 1'));
const li2 = document.createElement('li');
li2.appendChild(document.createTextNode('list 2'));
ul.appendChild(li1);
ul.appendChild(li2);

// function targetEvt(event) {
//     console.log(event.target);
// }

// ul.addEventListener('click', targetEvt, false);

function targetEvt(event) {
    // console.log(event.toElement);
}

ul.addEventListener('click', targetEvt, false);
*/

/*
const box1 = document.getElementById('box1');
box1.addEventListener('mouseout', (event) => {
    const to = event.relatedTarget;
    console.log('Mouse move to ', to);
})
*/

/*
const parent = document.getElementById('parent');
const output = document.getElementById('output');

parent.addEventListener("click", (event) => {
    const currentTarget = event.currentTarget.getAttribute("id");
    const target = event.target.getAttribute("id");
    output.textContent = `Current target: ${currentTarget}\n`;
    output.textContent += `Target: ${target}`;
});

const reset = document.querySelector('#reset');
reset.addEventListener("click", (event) => document.location.reload());
*/

/*
let screenLog =  document.querySelector('#screen-log');
document.addEventListener("mousemove", logKey)

function logKey(e) {
    screenLog.innerText = `Screen X/Y: ${e.screenX}, ${e.screenY} Client X/Y: ${e.clientX}, ${e.clientY}`;
}
*/

function showChar(e) {
    console.log(
        "Key KeyDown: "+ e.key +
        "\n" +
        "charCode: "+ e.key +
        "\n" +
        "ALT Key KeyDown: "+
        e.altKey +
        "\n"+
        "Ctrl Key KeyDown: "+
        e.ctrlKey +
        "\n"+
        "Shift Key KeyDown: "+
        e.shiftKey
    )
}