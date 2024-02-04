'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');

//console.log(block);

//console.log(block.textContent); // выдаст ошибку и код дальше не выполнится

// если содержимое block отсутствует, то не будет ошибки
//if (block) {
//	console.log(block.textContent);
//}

//console.log(block?.textContent); // оператор ? проверил значение слева от себя. Если null или undefined, то останавливает операцию и возвращает undefined

//console.log(1 + 2);

const userData = {
	name: 'Ivan',
	age: null,
	say: function () {
		console.log('hellow');
	},
};

//console.log(userData?.skills?.js); // проверяет сначала userData, затем skills

userData.say();
userData.hey?.(); // не покажет ошибку
