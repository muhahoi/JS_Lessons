'use strict';

//* метод "модуль"
const number = 1;
(function () {
	let number = 2;
	console.log(number); //2
	console.log(number + 3); // 5
})();

console.log(number); // 1

const user = (function () {
	const privat = function () {
		console.log('I am privat');
	};

	return {
		sayHello: privat,
	};
})();

user.sayHello(); // I am privat
