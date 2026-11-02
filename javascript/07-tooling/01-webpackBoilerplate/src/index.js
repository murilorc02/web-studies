const body = document.querySelector('body');

const title = document.createElement('h1');
title.innerText = 'Hello!';

body.appendChild(title);

const obj = {
    title: title.innerText,
    body: body.innerHTML
}