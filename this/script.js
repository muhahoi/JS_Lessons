'use strict';

// 1) обычная функция: this = windows, а если use strict -undefined
//function showThis() {
//	console.log(this);
//}

//showThis();

// 2) Контекст у методов объекта - сам объект
//const obj = {
//	a: 15,
//	b: 20,
//	sum: function () {
//		console.log(this);
//	},
//};

//obj.sum(); // {a: 15, b: 20, sum: ƒ}

//const obj = {
//	a: 15,
//	b: 20,
//	sum: function () {
//		function shout() {
//			console.log(this); // контекст вызова функции, а не метода - undefined
//		}
//		shout();
//	},
//};

//obj.sum();

// 3) this в конструкторах и классах - это новый экземпляр объекта

//function User(name, id) {
//	this.name = name;
//	this.id = id;
//	this.human = true;
//	this.hello = function () {
//		console.log('Hello ' + this.name);
//	};
//}
//let ivan = new User('Ivan', 23);

//ivan.hello();

// 4) ручное присвоение this любой функции: call, apply, bind

//function sayName() {
//	console.log(this);
//	console.log(this.name);
//}

//const user = {
//	name: 'John',
//};

//1 способ
//sayName.call(user); // передаем контекст вызова в функцию
//// {name: 'John'}
//// John
//sayName.apply(user); // передаем контекст вызова в функцию
// {name: 'John'}
// John

//если надо добавить еще дополнительные аргументы, например, surname

//function sayName(surname) {
//	console.log(this);
//	console.log(this.name + surname);
//}

//const user = {
//	name: 'John',
//};

//sayName.call(user, 'Smith'); // остальные аргументы можно перечислять через запятую
//// {name: 'John'}
//// JohnSmith;
//sayName.apply(user, ['Smith']); // остальные аргументы можно перечислять через запятую
// {name: 'John'}
// JohnSmith

// 2 способ
//создаем новую функцию и под нее подвязываем контекст

//function count(num) {
//	return this.num;
//}

//const double = count.bind(2); // 2 вместо this

//console.log(double(3)); // 3 вместо num
//console.log(double(13));

//const btn = document.querySelector('button');

//btn.addEventListener('click', function () {
//	console.log(this); // <button></button> когда функция в обычном виде:
//	// контекст вызова - сам элемент на котором произошло событие
//	// по сути this = event.target
//	// если поставить стрелочную функцию ()=>{this}, то контекст теряется. Будет undefined
//	this.style.background = 'red'; // <button style="background: red;"></button> сделает кнопку красной
//});

//const obj = {
//	num: 5,
//	sayNumber: function () {
//		const say = () => {
//			console.log(this); // {num: 5, sayNumber: ƒ}
//			console.log(this.num); // 5
//		};
//		say();
//	},
//};

//obj.sayNumber();

//const double = a => {
//	return a * 2;
//};
