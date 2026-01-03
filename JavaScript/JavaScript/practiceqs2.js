// Qs1
const random = Math.floor(Math.random() * 6) + 1;
console.log(random);

// Qs2
let car = {
    name: 'Mercedes',
    model: 'S-Class',
    color: 'Black'
}
console.log(car);

// Qs3
let person = {
    Name: 'Ramesh',
    Age: 4,
    City: 'Navi Mumbai'
}
console.log(person);

// Random practice
let para = document.createElement('p')
para.innerHTML = 'Hi I am red'
document.querySelector('body').append(para)
para.style.color = 'red'

let h3 = document.createElement('h3')
h3.innerHTML= 'Hi I am blue h3'
h3.style.color = 'blue'
document.querySelector('body').append(h3)

let div = document.createElement('div')
let h1 = document.createElement('h1')
let p = document.createElement('p')
h1.innerText = 'I am in a div'
p.innerText = 'Me too!!'
div.append(h1)
div.append(p)
div.classList.add('box2')
document.querySelector('body').append(div)