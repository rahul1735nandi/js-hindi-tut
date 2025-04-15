// attachEvent() -> This was used in internet explorer 
// jQuery - on -> This is used in jQuery

/*
document.getElementById('owl').onclick = function() {
    alert("Owl Clicked");
};
*/

// document.getElementById('owl').addEventListener('click', (event) => {
//     console.log(event);
// }); 

//type, timestamp, preventDefault, defaultPrevented, target, toElement, srcElement, currentTarget

// clientX, clientY, screenX, screenY

// altkey, ctrlkey, shiftkey, keyCode


/*
document.getElementById('images').addEventListener('click', (event) => {
    console.log("clicked inside the ul");
    // event.stopPropagation();
}, true);

document.getElementById('owl').addEventListener('click', (event) => {
    console.log("Owl clicked");
    // event.stopPropagation();
}, false);

*/

/*
Event Propagation:  Event propagation in JavaScript describes how events move through the Document Object Model (DOM) tree when an event occurs. It involves two main phases: capturing and bubbling. 

** Note: By default the event propagation is false means it's in bubbling phase. If we provide the value as true then it will be in capturing phase.

- Capturing occurs when the event travels from the root of the DOM tree down to the target element

- Bubbling occurs when the event travels from the target element back up to the root. 
*/

// stopPropagation: The stopPropagation() method of the Event interface prevents further propagation of the current event in the capturing and bubbling phases

/*
document.getElementById('google').addEventListener('click', (e) => {
    console.log("google clicked");
    e.preventDefault();
    e.stopPropagation();
}, false);
*/

document.querySelector('#images').addEventListener('click', (e) => {
    // console.log(e.target.parentNode);
    let removeElement = e.target.parentNode;


    // removeElement.remove();
    // removeElement.parentNode.removeChild(removeElement);

    console.log(e.target.tagName);
    if(e.target.tagName === 'IMG') {
        // removeElement.remove();
        removeElement.parentNode.removeChild(removeElement);
    }
}, false);