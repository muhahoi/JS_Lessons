'use strict';

const box = document.querySelector('.box'),
	btn = document.querySelector('button');

//const width = box.clientWidth; // ширина с паддингами и без марджинов и прокрутки
//const height = box.clientHeight;

//*---
//const width = box.offsetscroll

const width = box.scrollWidth; // ширина с паддингами, марджинами и прокруткой
const height = box.scrollHeight;
//console.log(width, height);

btn.addEventListener('click', () => {
	//box.style.height = box.scrollHeight + 'px'; // выводит полностью весь текст
	console.log(box.scrollTop); // показывает сколько уже пролистано
});

//console.log(box.getBoundingClientRect());
//DOMRect {x: 440, y: 50, width: 400, height: 350, top: 50, …}

console.log(box.getBoundingClientRect().top); // 50 - только один параметр top

const style = window.getComputedStyle(box);
console.log(style); // все css-свойства блока

console.log(style.display); // block

// количество пикселей, которые отлистал пользователь на странице
console.log(document.documentElement.clientWidth); // 1263

// сколько элементов пролистал
console.log(document.documentElement.scrollTop); // 1263

//document.documentElement.scrollTop = 0; // переместит в начало страницы

//window.scrollBy(0,400) // скролл на 400px от текущего положения
//window.scrollTo(0,400) // скролл на 400px относительно всей страницы
