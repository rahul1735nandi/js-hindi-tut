function clicked() {
    alert("Button Clicked");
}

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

const input = document.getElementById('input');
const output = document.getElementById('output');

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


const colors = document.getElementById('colors');
const selected = document.getElementById('selected');

// colors.addEventListener('change', (event) => {
//     console.log(event.target.value);
// })

// colors.addEventListener("change", () => {
//   selected.textContent = `You selected: ${colors.value}`;
// });


const checkBoxes = document.querySelectorAll('.check');
const countText = document.getElementById('count');

checkBoxes.forEach((box) => {
    box.addEventListener("change", (event) => {        
        const count = document.querySelectorAll('.check:checked').length;
        countText.textContent = `Checked: ${count}`;
    })
})