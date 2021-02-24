// Get reference to the element that already exists in the HTML
const container = document.querySelector('#container');

// Create a new div and store it at the variable `content`
const content = document.createElement('div');

// Add a class and some text to the 'content' div
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

// Append the content div to the container
container.appendChild(content);

// Exercise:
// Add the following elements to the container using ONLY javascript - do not add any HTML or CSS code.

// a < p > with red text that says “Hey I’m red!”
const para = document.createElement('p');
para.style.color = 'red';
para.textContent = "Hey I'm red!";
container.appendChild(para)

// an <h3> with blue text that says “I’m a blue h3!”
const h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.textContent = "I'm a blue h3!";
container.appendChild(h3)

// a <div> with a black border and pink background color with the following elements inside of it:
const div = document.createElement('div');
div.setAttribute('id', 'pinkDiv')
div.style.cssText = "border: solid black; background-color: pink;";
container.appendChild(div)

const pinkDiv = document.querySelector('#pinkDiv');
const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
pinkDiv.appendChild(h1);

const paraPink = document.createElement('p');
paraPink.textContent = "ME TOO!";
pinkDiv.appendChild(paraPink)

// a <div> with a black border and pink background color with the following elements inside of it:
const div2 = document.createElement('div');
div2.setAttribute('id', 'blueDiv')
div2.style.cssText = "border: solid black; background-color: #4DA6FF;";

const h1a = document.createElement('h1');
h1a.textContent = "I'm in a div";
div2.appendChild(h1a);

const bluePink = document.createElement('p');
bluePink.textContent = "ME TOO!";
div2.appendChild(bluePink)
container.appendChild(div2)

// Attaching listeners to gorups of nodes
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    alert(button.id)
  })
})