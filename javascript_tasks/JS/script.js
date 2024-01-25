'use strict';
// 1) При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой
// 2) При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл
// 3) При помощи цикла for выведите чётные числа от 2 до 10 включительно
// 4) Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.

// Цикл, который нужно переписать:

//  for (let i = 2; i <= 16; i++) {
//      if (i % 2 === 0) {
//          continue;
//      } else {
//          console.log(i);
//      }
//  }

// 5) Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

// Место для первой задачи
//function firstTask() {
//	// Пишем решение вот тут
//	for (let i = 5; i <= 10; i++) {
//		console.log(i);
//	}
//}
//firstTask();
//// Место для второй задачи
//function secondTask() {
//	// Пишем решение вот тут
//	for (let i = 20; i >= 10; i--) {
//		if (i == 13) break;
//		console.log(i);
//	}
//}
//secondTask();
// Место для третьей задачи
//function thirdTask() {
//	// Пишем решение вот тут
//	for (let i = 2; i <= 10; i++) {
//		if (i % 2 == 0) {
//			console.log(i);
//		}
//	}
//}
//thirdTask();
// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

//function fourthTask() {
//	// Пишем решение вот тут
//	//for (let i = 2; i <= 16; i++) {
//	//	if (i % 2 === 0) {
//	//		continue;
//	//	} else {
//	//		console.log(i);
//	//	}
//	//}
//	let i = 2;
//	while (i <= 16) {
//		if (i % 2 !== 0) {
//			console.log(i);
//		}
//		i++;
//	}
//}
//fourthTask();
// Место для пятой задачи

//function fifthTask() {
//	const arrayOfNumbers = [];
//	for (let i = 5; i <= 10; i++) {
//		arrayOfNumbers.push(i);
//	}
//	// Пишем решение вот тут

//	// Не трогаем
//	return arrayOfNumbers;
//}
//fifthTask();

//** задачи 4/

// 1) Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив

// 2) Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

// 3) Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

// Место для первой задачи
//function firstTask() {
//	// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//	const arr = [3, 5, 8, 16, 20, 23, 50];
//	const result = [];

//	// Пишем решение вот тут
//	for (let i = 0; i < arr.length; i++) {
//		result.push(arr[i]);
//	}
//	console.log(result);
//	// Не трогаем
//	return result;
//}
//firstTask();

// Место для второй задачи
//function secondTask() {
//	// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//	const data = [5, 10, 'Shopping', 20, 'Homework'];

//	// Пишем решение вот тут
//	for (let i = 0; i < data.length; i++) {
//		if (typeof data[i] === 'string') {
//			data[i] = data[i] + ' - done';
//		} else {
//			data[i] = data[i] * 2;
//		}
//	}
//	// Не трогаем
//	return data;
//}
//secondTask();

// Место для третьей задачи
//function thirdTask() {
//	// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//	const data = [5, 10, 'Shopping', 20, 'Homework'];
//	const result = [];

//	// Пишем решение вот тут
//	for (let i = data.length - 1; i > -1; i--) {
//		result.push(data[i]);
//	}
//	console.log(result);
//	// Не трогаем
//	return result;
//}
//thirdTask();

//** Задача 5 */

// Необходимо написать код, который при помощи звездочек (*) в консоли нарисует вот такую фигуру:

//      *
//     ***
//    *****
//   *******
//  *********
// ***********

//let star = '*';
//let length = 13;
//let result = '';
//let space = ' ';
//let spaceCount = (length - (length % 2)) / 2;

//for (let i = 0; i <= length - 1; i++) {
//	if (i % 2 !== 0) {
//		spaceCount -= 1;
//		result += space.repeat(spaceCount);
//		result += star.repeat(i);
//		result += '\n';
//	}
//}
//console.log(result);

//** Задача 6 */

// 1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.

// Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!". В решении вызывать функцию не нужно, программа сделает это за вас.

// P.S. возвращать - это использовать ключевое слово return.

// P.S.S. Это классическая функция-модификатор, которых мы дальше по курсу будем создавать еще много в разных видах.

// Место для первой задачи
//function sayHello(userName) {
//	console.log(`Привет, ${userName}!`);
//}

// 2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.

// Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].

//function returnNeighboringNumbers(number) {
//	let arr = [];
//	arr.push(number - 1);
//	arr.push(number);
//	arr.push(number + 1);
//	console.log(arr);
//	return arr;
//}
//returnNeighboringNumbers(5);
// 3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.

// Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)

// Примеры:

// Вызов функции getMathResult(5, 3) даст ответ 5---10---15

// Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30

// Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50

// Вызов функции getMathResult(10, '5') даст ответ 10

// Вызов функции getMathResult(10, 0) даст ответ 10

// Вызов функции getMathResult(20, -5) даст ответ 20

// Место для третьей задачи
//function getMathResult(number, multiplier) {
//	let result = number;
//	if (multiplier > 0 && typeof multiplier === 'number') {
//		for (let i = 2; i <= multiplier; i++) {
//			result += '---' + number * i;
//		}
//	}
//	console.log(result);
//	return result;
//}
//getMathResult(10, 5);

// 1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.

// Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"

// НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает и тесты будут ломаться. Это из-за того, что этот оператор из более нового стандарта, чем тут доступен.

// Примеры:

// calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'

// calculateVolumeAndArea(15)  => 'Объем куба: 3375, площадь всей поверхности: 1350'

// calculateVolumeAndArea(15.5)  => 'При вычислении произошла ошибка'

// calculateVolumeAndArea('15')  => 'При вычислении произошла ошибка'

// calculateVolumeAndArea(-15)  => 'При вычислении произошла ошибка'

// Место для первой задачи
//function calculateVolumeAndArea(length) {
//	if (typeof length !== 'number' || length <= 0 || length % 1 !== 0) {
//		console.log('При вычислении произошла ошибка');
//	} else {
//		const volume = length * length * length;
//		const area = length * length * 6;
//		console.log(`Объем куба: ${volume}, площадь всей поверхности: ${area}`);
//	}
//}
//calculateVolumeAndArea(15.5);
// 2) Постепенно переходим к более реалистичным задачам :) Вы обнаружите, что там используется все тоже самое.

// Напишите функцию, которая будет определять номер купе по переданному ей номеру места.

// Функция принимает только целое число от 1 до 36.

// Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:

// "Ошибка. Проверьте правильность введенного номера места"

// Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"

// Пример:

// getCoupeNumber(33)  => 9

// getCoupeNumber(7)  => 2

// getCoupeNumber(300)  => "Таких мест в вагоне не существует"

// getCoupeNumber(0)  => "Таких мест в вагоне не существует"

// getCoupeNumber(7.7)  => "Ошибка. Проверьте правильность введенного номера места"

// getCoupeNumber(-10)  => "Ошибка. Проверьте правильность введенного номера места"

// getCoupeNumber('Hello')  => "Ошибка. Проверьте правильность введенного номера места"

// Место для второй задачи
//function getCoupeNumber(coupeNumber) {
//	if (
//		typeof coupeNumber !== 'number' ||
//		coupeNumber < 0 ||
//		coupeNumber % 1 !== 0
//	) {
//		console.log('Ошибка. Проверьте правильность введенного номера места');
//	} else if (coupeNumber === 0 || coupeNumber > 36) {
//		console.log('Таких мест в вагоне не существует');
//	} else {
//		return Math.ceil(coupeNumber / 4);
//	}
//}
//getCoupeNumber(19);

//** Задачи 8

// 1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

// Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

// Пример:

// getTimeFromMinutes(150) => "Это 2 часа и 30 минут"

// getTimeFromMinutes(50) => "Это 0 часов и 50 минут"

// getTimeFromMinutes(0) => "Это 0 часов и 0 минут"

// getTimeFromMinutes(-150) => "Ошибка, проверьте данные"

// Место для первой задачи
//function getTimeFromMinutes(time) {
//	if (typeof time !== 'number' || time < 0 || time % 1 !== 0) {
//		return 'Ошибка, проверьте данные';
//	} else {
//		let hour = Math.trunc(time / 60);
//		let minutes = time - hour * 60;
//		let lastDigitHour = hour % 10;
//		let lastDigitMinutes = minutes % 10;
//		let hourText;
//		let minutesText;
//		if (lastDigitHour === 1) {
//			hourText = 'час';
//		} else if (
//			lastDigitHour === 2 ||
//			lastDigitHour === 3 ||
//			lastDigitHour === 4
//		) {
//			hourText = 'часa';
//		} else {
//			hourText = 'часов';
//		}
//		if (lastDigitMinutes === 1) {
//			minutesText = 'минута';
//		} else if (
//			lastDigitMinutes === 2 ||
//			lastDigitMinutes === 3 ||
//			lastDigitMinutes === 4
//		) {
//			minutesText = 'минуты';
//		} else {
//			minutesText = 'минут';
//		}
//		return `Это ${hour} ${hourText} и ${minutes} ${minutesText}`;
//	}
//}
//getTimeFromMinutes();
// 2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

// Пример:

// findMaxNumber(1, 5, 6.6, 11); =>  11

// findMaxNumber(1, 5, '6', '10');  =>  0

// Место для второй задачи
//function findMaxNumber(a, b, c, d) {
//	if (
//		typeof a !== 'number' ||
//		typeof b !== 'number' ||
//		typeof c !== 'number' ||
//		typeof d !== 'number'
//	) {
//		return 0;
//	} else {
//		return Math.max(a, b, c, d);
//	}
//}
//findMaxNumber(21, 12, 3, 4);

//** Задача 9 */
// Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. Причем, их количество должно быть равно переданному аргументу.

// Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.

// Пример:

// fib(4) => "0 1 1 2"

// fib(7) => "0 1 1 2 3 5 8"

// fib('7') => ""

// fib(1) => "0"

// fib(0) => ""

//function fib(number) {
//	if (typeof number !== 'number' || number <= 0 || number % 1 !== 0) {
//		console.log('пусто');
//		return '';
//	} else if (number === 1) {
//		console.log('0');
//		return 0;
//	} else {
//		let arr = [0, 1];
//		for (let i = 0; i <= number - 3; i++) {
//			arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
//		}
//		console.log(arr.join(' '));
//		return arr.join(' ');
//	}
//}
//fib(2);
//**callback */
//function learnJS(lang, callback) {
//	console.log(`Я учу ${lang}`);
//	callback();
//}

//function done() {
//	console.log('Я закончил урок');
//}

//learnJS('JavaScript', done);

//**Объекты, деструктуризация объектов  */

//const options = {
//	name: 'test',
//	width: 1024,
//	heigh: 1024,
//	colors: {
//		border: 'black',
//		bg: 'red',
//	},
//	makeTest: function () {
//		console.log('Test');
//	},
//};

//console.log(options.name); // test

//удаляем элемент
//delete options.name;
//console.log(options);
//let counter = 0;
//for (let key in options) {
//	if (typeof options[key] === 'object') {
//		for (let i in options[key]) {
//			console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//			counter++;
//		}
//	} else {
//		console.log(`Свойство ${key} имеет значение ${options[key]}`);
//		counter++;
//	}
//}
//console.log(counter);
//console.log(Object.keys(options)); //все ключи объекта
//console.log(Object.keys(options).length); // количество ключей объекта
//options.makeTest();

//деструктуризация

//const { border, bg } = options.colors;
//console.log(border);

//**Упражнение по написанию кода 10 */
// 1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.

// Пример:

// showExperience(personalPlanPeter) => '1 month'

// P.S. желательно использовать деструктуризацию, но не обязательно
//const personalPlanPeter = {
//	name: 'Peter',
//	age: '29',
//	skills: {
//		languages: ['ru', 'eng'],
//		programmingLangs: {
//			js: '20%',
//			php: '10%',
//		},
//		exp: '1 month',
//	},
//	showAgeAndLangs(plan) {
//		let language = '';
//		for (let lang of plan.skills.languages) {
//			language += ` ${lang.toUpperCase()}`;
//		}
//		return `Мне ${plan.age} и я владею языками:${language}`;
//	},
//};

//function showExperience(plan) {
//	const { exp } = plan.skills;
//	console.log(exp);
//	return exp;
//}
//showExperience(personalPlanPeter);

// 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.

// Пример:

// showProgrammingLangs(personalPlanPeter)  =>

// "Язык js изучен на 20% Язык php изучен на 10%"

// Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.

// P.S. Для переноса строки используется \n в конце строки.

// 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.

// Пример:

// personalPlanPeter.showAgeAndLangs(personalPlanPeter)

// => 'Мне 29 и я владею языками: RU ENG'

// Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами). Если данные в объекте поменяются, то и сообщение тоже изменится.

//function showProgrammingLangs(plan) {
//	let result = '';
//	for (let key in plan.skills.programmingLangs) {
//		if (key) {
//			result += `Язык ${key} изучен на ${plan.skills.programmingLangs[key]}\n`;
//		} else {
//			return '';
//		}
//	}
//}
//personalPlanPeter.showAgeAndLangs(personalPlanPeter);

//**Упражнение по написанию кода 11 */
// 1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.

// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'

// Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'

// 2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.

// Пример:

// standardizeStrings(favoriteCities)  выведет в консоль

// lisbon
// rome
// milan
// dublin

//const family = ['Peter', 'Ann', 'Alex', 'Linda'];

//function showFamily(arr) {
//	if (arr.length > 0) {
//		console.log(`Семья состоит из: ${arr.join(' ')}`);
//	} else {
//		console.log('Семья пуста');
//	}
//}
//showFamily(family);

//const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

//function standardizeStrings(arr) {
//	arr.forEach(element => {
//		console.log(element.toLowerCase());
//	});
//}
//standardizeStrings(favoriteCities);

//**Упражнение по написанию кода 12 */

// 3) Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.

// Пример:

// const someString = 'This is some strange string';

// reverse(someString) => 'gnirts egnarts emos si sihT'

// 4) Представьте такую реальную ситуацию. У вас есть банкомат, который выдает деньги из двух разных банков в разных валютах. Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: первый - это массив со всеми доступными валютами из двух банков сразу (сейчас представим, что они не могут повторяться), второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'. Функция возвращает строку в нужном виде.

// Пример:

// availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')

// Вернет строку:

// Доступные валюты:
// UAH
// RUB

// Заметьте:

// - CNY (юань) исчез из списка валют, значит такая валюта закончилась

// - После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов

// - Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies, потом additionalCurrencies по порядку

//const someString = 'This is some strange string';

//function reverse(str) {
//	if (typeof str === 'string') {
//		let arr = [];
//		for (let i = -1; i >= -someString.length; i--) {
//			arr.push(someString.at(i));
//		}
//		console.log(arr);
//		console.log(arr.join(''));
//		return arr.join('');
//	} else {
//		console.log('Ошибка!');
//		return 'Ошибка!';
//	}
//}

//reverse(someString);

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
const arr = baseCurrencies.concat(additionalCurrencies);

function availableCurr(arr, missingCurr) {
	let result = `Доступные валюты:\n`;
	!arr.length
		? (result = 'Нет доступных валют')
		: arr.forEach(element => {
				element !== missingCurr ? (result += `${element}\n`) : result;
		  });
	return result;
}
//availableCurr(arr, 'CNY');
console.log(availableCurr(arr, 'CNY'));
