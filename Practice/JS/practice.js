const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

const addbtn = document.getElementById("add");
const subbtn = document.getElementById("sub");
const mulbtn = document.getElementById("mul");

const output = document.getElementById("output");

addbtn.addEventListener("click", () => {
    const a = Number(num1.value);
    const b = Number(num2.value);
    output.textContent = a + b;
})
subbtn.addEventListener("click", () => {
    const a = Number(num1.value);
    const b = Number(num2.value);
    output.textContent = a - b;
});

mulbtn.addEventListener("click", () => {
    const a = Number(num1.value);
    const b = Number(num2.value);
    output.textContent = a * b;
});