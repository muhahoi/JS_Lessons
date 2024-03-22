'use strict';
//function User(name, age) {
//	this.name = name;
//	let userAge = age;

//	this.say = function () {
//		console.log(`Имя пользователя: ${this.name}, возраст: ${userAge}`);
//	};

//	this.getAge = function () {
//		return userAge;
//	};

//	this.setAge = function (age) {
//		if (typeof age === 'number' && age > 0 && age < 110) {
//			userAge = age;
//		} else {
//			console.log('Недопустимое значение!');
//		}
//	};
//}

//const ivan = new User('Ivan', 27);

//console.log(ivan.name); // Ivan
//console.log(ivan.userAge); //  undefined, так как userAge, это не свойство объекта, а переменная, созданная в объекте

//ivan.say(); // Имя пользователя: Ivan, возраст: 27

//ivan.name = 'Alex';
//ivan.age = 30; // не поменяет возраст, так как это переменная, а не свойство объекта

//ivan.say(); // Имя пользователя: Alex, возраст: 27

//// добавили getAge и setAge

//console.log(ivan.getAge()); //27
//ivan.setAge(35); // установит 35
//ivan.setAge(300); // Недопустимое значение!

//ivan.say(); // Имя пользователя: Alex, возраст: 35

//* сделаем всё на классах
class User {
	constructor(name, age) {
		this.name = name;
		//this.userAge = age; // сделали публичным поставив this
		this._age = age; // скрываем свойство
	}

	#surname = 'Smith'; // приватное свойство

	// можно записать say = () =>{}
	say() {
		//console.log(`Имя пользователя: ${this.name}, возраст: ${this.userAge}`);
		console.log(
			`Имя пользователя: ${this.name} ${this.#surname}, возраст: ${this._age}`
		);
	}

	//getAge() {
	get age() {
		//return this.userAge;
		return this._age;
	} // обязательно удалять точку с запятой

	//setAge(age) {
	set age(age) {
		if (typeof age === 'number' && age > 0 && age < 110) {
			//this.userAge = age;
			this._age = age;
		} else {
			console.log('Недопустимое значение!');
		}
	}
}

const ivan = new User('Ivan', 27);
//console.log(ivan.name); //Ivan
//console.log(ivan.age); // 27
//ivan.userAge = 99; // публичное свойство смогли поменять на 99
//ivan.age = 99; // 99
//console.log(ivan.getAge()); //99
//console.log(ivan.age); //

//ivan.setAge(35);
//ivan.setAge(300); //Недопустимое значение!
//console.log(ivan.getAge()); //35

//ivan.say(); // Имя пользователя: Ivan, возраст: 35
//ivan.say(); // Имя пользователя: Ivan, возраст: 99
//ivan.say(); // Имя пользователя: Ivan Smith, возраст: 27

console.log(ivan.surname); // указываем без решетки, получаем undefined
ivan.say(); // Имя пользователя: Ivan Smith, возраст: 27
