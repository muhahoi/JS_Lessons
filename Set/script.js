'use script';

//const arr = [1, 1, 2, 2, 4, 5, 6, 5];

//const set = new Set(arr); // Set(5) { 1, 2, 4, 5, 6 }
/------------- */;
//const arr = ['Alex', 'Ann', 'Oleg', 'Alex'];

//const set = new Set(arr); // Set(3) { 'Alex', 'Ann', 'Oleg' }

//set.add('Ivan'); // Set(4) { 'Alex', 'Ann', 'Oleg', 'Ivan' }
//set.add('Oleg'); // Set(4) { 'Alex', 'Ann', 'Oleg', 'Ivan' }
//set.delete('Ann'); // Set(3) { 'Alex', 'Oleg', 'Ivan' }
//set.has('Oleg'); // true
//set.clear(); //очистка массива
//set.size; // 3

//for (let value of set) {
//	console.log(value);
//	//Alex;
//	//Oleg;
//	//Ivan;
//}

//set.forEach((value, valueAgain, set) => {
//	console.log(value, valueAgain);
//	//Alex Alex
//	//Oleg Oleg
//	//Ivan Ivan
//});

//console.log(set.values()); //[Set Iterator] { 'Alex', 'Oleg', 'Ivan' }
//console.log(set.keys()); //[Set Iterator] { 'Alex', 'Oleg', 'Ivan' }
//console.log(set.entries());
//[Set Entries] {
//  [ 'Alex', 'Alex' ],
//  [ 'Oleg', 'Oleg' ],
//  [ 'Ivan', 'Ivan' ]
//}

//*функция-помощник, которая фильтрует любой массив

const arr = ['Alex', 'Ann', 'Oleg', 'Ann', 'Alex'];

function unique(arr) {
	return Array.from(new Set(arr)); //создаем массив из содержимого set
}

console.log(unique(arr)); // [ 'Alex', 'Ann', 'Oleg' ]
