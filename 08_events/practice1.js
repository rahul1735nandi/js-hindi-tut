// function clicked() {
//     alert("Button Clicked");
// }

// function changeText() {
//     const para = document.getElementById('prg');
//     para.innerText = "Hello, JavaScript!";
// }


// const btn = document.getElementById('btn').addEventListener('click', function() {
//     document.getElementById('prg').textContent = "Hello, World!";
// })


// const btn = document.getElementById('btn').addEventListener('click', function () {
//     document.body.style.backgroundColor = 'lightgreen';
// })


// const box = document.getElementById('box');
// box.addEventListener('mouseenter', () => box.style.backgroundColor = 'pink');
// box.addEventListener('mouseleave', () => box.style.backgroundColor = 'yellow');

// const para = document.getElementById('prg')
// para.addEventListener('dblclick', () => para.style.fontWeight = 'bold');

// const input = document.getElementById('input');
// const output = document.getElementById('output');

// input.addEventListener('keydown', (event) => {
//     output.textContent = input.value.length;
// })

// input.addEventListener('keydown', (event) => {    
//     if(event.key === 'Enter') {
//         output.textContent = 'Submitted!';
//     }
// });


// const toggle = document.getElementById('toggle');
// const password = document.getElementById('password');

// toggle.addEventListener('change', (event) => {
//     console.log(event);
//     password.type = toggle?.checked ? "text" : "password";
// })

// const form = document.getElementById('form');
// const result = document.getElementById('result');

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     result.textContent = document.getElementById('name').value;
// });


// const colors = document.getElementById('colors');
// const selected = document.getElementById('selected');

// colors.addEventListener('change', (event) => {
//     console.log(event.target.value);
// })

// colors.addEventListener("change", () => {
//   selected.textContent = `You selected: ${colors.value}`;
// });


// const checkBoxes = document.querySelectorAll('.check');
// const countText = document.getElementById('count');

// checkBoxes.forEach((box) => {
//     box.addEventListener("change", (event) => {        
//         const count = document.querySelectorAll('.check:checked').length;
//         countText.textContent = `Checked: ${count}`;
//     })
// })


// const btn = document.getElementById('btn');
// let countDisplay = document.getElementById('counter');
// let counter = 0;

// btn.addEventListener('click', () => {
//     counter++;
//     countDisplay.textContent = counter;
// })


// const input = document.getElementById('taskInput');
// const btn = document.getElementById('addTask');
// const list = document.getElementById('taskList');

// btn.addEventListener('click', addTask);
// input.addEventListener('keydown', (e) => {
//     if(e.key == 'Enter') {
//         addTask();
//     }
// })

// function addTask() {
//     if(input?.value?.trim() == "") return;
//     const li = document.createElement('li');
//     li.textContent = input?.value;
//     li.addEventListener('dblclick', () => li.remove());
//     list.appendChild(li);
//     input.value = '';
// }

//   const r = document.getElementById('r');
//   const g = document.getElementById('g');
//   const b = document.getElementById('b');
//   const box = document.getElementById('colorBox');

//   function updateColor() {
//     const color = `rgb(${r.value}, ${g.value}, ${b.value})`;
//     console.log(color);
//     box.style.backgroundColor = color
//   }

//   [r,g,b].forEach(slider => slider.addEventListener('input', updateColor));


// const coords = document.getElementById('coords');

// document.addEventListener('mousemove', (event) => {
//     console.log(event);
//     coords.textContent = `X: ${event.clientX}, Y: ${event.clientY}`;
// })

const words = ["apple", "banana", "cherry", "grape", "orange"];
let current = "";

function newWord() {
    current = words[Math.floor(Math.random() * words.length)];
    document.getElementById('word').textContent = current;
    document.getElementById('inputWord').value = "";
    document.getElementById('status').textContent = "";
}


document.getElementById('inputWord')?.addEventListener('input', (e) => {
    if(e.target.value === current) {
        document.getElementById('status').textContent = "Correct";
        newWord();
    }
})

newWord();

