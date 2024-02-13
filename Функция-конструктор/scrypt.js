'use strict';

 Создаем конструктор

function User(name, id) {
	this.name = name;
	this.id = id;
	this.human = true;
	this.hello = function () {
		console.log(`Hello, ${this.name}`);
	};
}

Все юзеры созданные после этого прототипа будут иметь этот метод
User.prototype.exit = function () {
	console.log(`Пользователь ${this.name} вышел`);
};

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

alex.exit(); // Пользователь Alex вышел

console.log(alex);
 User { name: 'Alex', id: 20, human: true,  hello: [Function (anonymous)] }

alex.hello(); // Hello, Alex

//* Классы
class User {
	constructor(name, id) {
		this.name = name;
		this.id = id;
		this.human = true;
	}
	hello() {
		console.log(`Hello, ${this.name}`);
	}
	exit() {
		console.log(`Пользователь ${this.name} вышел`);
	}
}

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

alex.hello();
alex.exit();
