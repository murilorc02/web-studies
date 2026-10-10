const articleOutput = document.querySelector('#article-output');

const body = document.querySelector('body');
const bodyStyles = getComputedStyle(body);
const backgroundHighlight = bodyStyles.backgroundColor;

const article = document.createElement('article');

const title = document.createElement('h2');
title.innerText = 'This is an article';
title.style.backgroundColor = backgroundHighlight;

const paragraph = document.createElement('p');
paragraph.innerText = 'Right now you are reading a really important information.'

article.appendChild(title);
article.appendChild(paragraph);
articleOutput.appendChild(article);