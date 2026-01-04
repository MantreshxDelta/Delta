// let btn = document.querySelector('button')
// console.dir(btn);

// btn.onclick = function () {
//     console.log('Button was clicked');
// }

let btns = document.querySelectorAll('button');
for (btn of btns) {
    btn.onclick = sayhello;
    // btn.onmouseenter = sayhello;
}
function sayhello() {
    console.log('Hellow')
}

