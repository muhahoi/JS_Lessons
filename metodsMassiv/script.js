'use strict';

//* filter  - возвращает новый массив

//const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

//const shortNames = names.filter(name => name.length < 5);

//console.log(shortNames);

//* map - возвращает новый массив

//const answers = ['IvAn', 'AnnA', 'Hello'];

//const result = answers.map(item => item.toLowerCase());

//console.log(result);

//*map может перезаписать массив

//let answers = ['IvAn', 'AnnA', 'Hello'];

//answers = answers.map(item => item.toLowerCase());

//console.log(answers);

//* every/some возвращает true или false

//const arr = [4, 'qwq', 'sdfsdfsd'];

//// если есть хотя бы одно число - true
//console.log(arr.some(item => typeof item === 'number')); // true

//// если все числа, то true
//console.log(arr.every(item => typeof item === 'number')); // false

//* reduce

//const array = [4, 5, 1, 3, 2, 6];

//const res = array.reduce((sum, current) => sum + current);
//console.log(res);

//*

const obj = {
	ivan: 'persone',
	ann: 'persone',
	dog: 'animal',
	cat: 'animal',
};

// конвертируем объект в массив массивов
const newArray = Object.entries(obj)
	.filter(item => item[1] === 'persone')
	.map(item => item[0]);
console.log(newArray);
/* .entries()
[
  [ 'ivan', 'persone' ],
  [ 'ann', 'persone' ],
  [ 'dog', 'animal' ],
  [ 'cat', 'animal' ]
]
*/

/* .filter()
[
	['ivan', 'persone'],
	['ann', 'persone'],
]
*/

/* .map()
// [ 'ivan', 'ann' ]