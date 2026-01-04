// let btn = document.querySelector('button')
// console.dir(btn);

// btn.onclick = function () {
//     console.log('Button was clicked');
// }

// let btns = document.querySelectorAll('button');
// for (btn of btns) {
//     btn.onclick = sayhello;
//     // btn.onmouseenter = sayhello;
// }
// function sayhello() {
//     console.log('Hellow')
// }

// Event Listners
// Used to write multiple functions like eg onclick you 
// can only write this funciton one time but with event listners
// you can write onclick lke functions as many times as you want

let btns = document.querySelectorAll('button');
for (btn of btns) {
    btn.addEventListener('click', sayhello);
    btn.addEventListener('click', sayhi);
}
function sayhello(){
    console.log('Hello');
}
function sayhi(){
    console.log('Hel');
}