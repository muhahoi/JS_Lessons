'use strict';

const person = {
	name: 'Alex',
	tel: '+744444444',
};

// подготовим данные для отправки на сервер
console.log(JSON.stringify(person));
// {"name":"Alex","tel":"+744444444"}

// конвертируем данные, полученные с сервера
console.log(JSON.parse(JSON.stringify(person)));
// { name: 'Alex', tel: '+744444444' }

//* глубокое копирование

const user = {
	name: 'Alex',
	tel: '+744444444',
	parents: {
		mom: 'Lena',
		dad: 'Oleg',
	},
};

const clone = JSON.parse(JSON.stringify(user));
// сначала объект переводится в json, а затем обратно в объект
clone.parents.mom = 'Ann';

console.log(user);
//{
//  name: 'Alex',
//  tel: '+744444444',
//  parents: { mom: 'Lena', dad: 'Oleg' }
//}

console.log(clone);
//{
//  name: 'Alex',
//  tel: '+744444444',
//  parents: { mom: 'Ann', dad: 'Oleg' }
//}

function copy(mainObj) {
	let objCopy = {}; // objCopy будет хранить копию mainObj
	let key;

	for (key in mainObj) {
		objCopy[key] = mainObj[key]; // копирует каждое свойство objCopy
	}
	return objCopy;
}

const mainObj = {
	a: 2,
	b: 5,
	c: {
		x: 7,
		y: 4,
	},
};

console.log(copy(mainObj));
