'use strict';

const box = document.querySelector('.box');

const newHeight = 100;
const newWidth = 400;

function changeParams(elem, h, w) {
	elem.style.height = `${h || 200}px`; //200 - значение по умолчанию. Если нет h, то подставится 200
	elem.style.width = `${w || 200}px`;
	elem.innerHTML = (h ?? 200) * (w ?? 200); // 40 000
}

changeParams(box, newHeight, newWidth);

let userName;
let userKey;

console.log(userName ?? 'User'); // User. ?? как "Или", но проверяет на undefined и null

console.log(userName ?? userKey ?? 'User'); //User
