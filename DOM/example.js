const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);


const hey = document.createElement('p');
hey.style.color = 'red';
hey.textContent = 'Hey I\'m red!';
container.appendChild(hey);

const blue = document.createElement('h3');
blue.style.color = 'blue';
blue.textContent = 'I\'m a blue h3!';
container.appendChild(blue);

const black = document.createElement('div');
black.style.border = 'thick solid black';
black.style.backgroundColor = 'pink';
const div = document.createElement('h1');
div.textContent = 'I\'m in a div';
black.appendChild(div);
const me = document.createElement('p');
me.textContent = 'ME TOO!';
black.appendChild(me);

container.appendChild(black);
