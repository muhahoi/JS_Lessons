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

//const baseCurrencies = ['USD', 'EUR'];
//const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
//const arr = baseCurrencies.concat(additionalCurrencies);

//function availableCurr(arr, missingCurr) {
//	let result = `Доступные валюты:\n`;
//	!arr.length
//		? (result = 'Нет доступных валют')
//		: arr.forEach(element => {
//				element !== missingCurr ? (result += `${element}\n`) : result;
//		  });
//	return result;
//}
////availableCurr(arr, 'CNY');
//console.log(availableCurr(arr, 'CNY'));

//** Основы ООП, прототипно-ориентированное наследование */

//const soldier = {
//	health: 400,
//	armor: 100,
//};
//**старое создание прототипа */
//const john = {
//	health: 100,
//};
//john.__proto__ = soldier; // устаревший метод
//Object.setPrototypeOf(john, soldier); // новый метод
//**современное создание прототипа */
//const john = Object.create(soldier);

//console.log(john); // { health: 100 }

//console.log(john.armor); // 100

//soldier.sayHello = function () {
//	console.log('Hello!');
//};

//john.sayHello(); // Hello!

//**Упражнение по написанию кода 13 **/

// Написать функцию isBudgetEnough, которая буде возвращать строку. Если бюджета хватает для отопления всего объема торгового центра - выводится 'Бюджета достаточно', если нет - 'Бюджета недостаточно'

// Но эта задача содержит несколько подзадач внутри:

// - вычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на его ширину;

// - вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;

// - определение того, хватает ли бюджета на оплату такого объема;

// - все числа идут без единиц измерения для упрощения, просто цифры и все;

// - функция должна продолжать работать, даже если изменяется количество магазинов, высота, бюджет или подставляется вообще другой объект

//const shoppingMallData = {
//	shops: [
//		{
//			width: 10,
//			length: 5,
//		},
//		{
//			width: 15,
//			length: 7,
//		},
//		{
//			width: 20,
//			length: 5,
//		},
//		{
//			width: 8,
//			length: 10,
//		},
//	],
//	height: 5,
//	moneyPer1m3: 30,
//	budget: 50000,
//};

//function isBudgetEnough(data) {
//	let volume = 0;
//	for (let size of data.shops) {
//		volume += size.width * size.length * data.height;
//	}
//	return volume * data.moneyPer1m3 > data.budget
//		? 'Бюджета не достаточно'
//		: 'Бюджета достаточно';
//}
//console.log(isBudgetEnough(shoppingMallData));

//**Упражнение по написанию кода 14 */

// У вас есть список учеников, которые хотят поиграть в игру:

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.

// Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку. Эти группы должны быть массивами. Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.

// Пример:

// sortStudentsByGroups(students)  =>

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi'
// ]

// Если убрать одно студента из списка, то результат будет:

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: -'
// ]

// А если добавить одного, то:

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi, Somebody'
// ]

// То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда.

//const students = [
//	'Peter',
//	'Andrew',
//	'Ann',
//	'Mark',
//	'Josh',
//	'Sandra',
//	'Cris',
//	'8Sam',
//	'9S9gam',
//	'9S9gam',
//	'9S9gam',
//];

//function sortStudentsByGroups(arr) {
//	let sortedArray = arr.sort();
//	let newArray = [[], [], [], `Оставшиеся студенты: ${sortedArray[9]}`];
//	if (sortedArray.length === 9) {
//		newArray[3] = 'Оставшиеся студенты: -';
//	}
//	for (let i = 0; i < sortedArray.length; i++) {
//		switch (true) {
//			case i < 3:
//				newArray[0].push(sortedArray[i]);
//				break;
//			case i < 6:
//				newArray[1].push(sortedArray[i]);
//				break;
//			case i < 9:
//				newArray[2].push(sortedArray[i]);
//				break;
//			case i > 9:
//				newArray[3] = newArray[3] + ', ' + sortedArray[i];
//				break;
//		}
//	}
//	return newArray;
//}

//console.log(sortStudentsByGroups(students));

////**Замыкание и лексическое окружение */
//function createCounter() {
//	let counter = 0;

//	const myFunction = function () {
//		counter += 1;
//		return counter;
//	};
//	console.log(counter);
//}
//const increment = createCounter();

//const c1 = increment();
//const c2 = increment();
//const c3 = increment();

//console.log(c1, c2, c3);

//**Задачи с собеседования */
// Какое будет выведено значение: let x = 5; alert( x++ ); ? //5
// Чему равно такое выражение: [ ] + false - null + true ? // NaN
// Что выведет этот код: let y = 1; let x = y = 2; alert(x); ? 2
// Чему равна сумма [ ] + 1 + 2? // '12'
// Что выведет этот код: alert( '1'[0] )? // '1'
// Чему равно 2 && 1 && null && 0 && undefined ? // null
// Есть ли разница между выражениями? !!( a && b ) и (a && b)? //не равны
// Что выведет этот код: alert( null || 2 && 3 || 4 ); ? // 3
// a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ? //нет
// Что выведет этот код: alert( +'Infinity'); Infinity
// Верно ли сравнение: 'Ёжик' > 'яблоко'? // false
// Чему равно 0 || '' || 2 || undefined || true || falsе ? //true

//**[] + false - null + true;

//console.log([] + false); //'false' строка, т.к. [] === ''
//console.log([] + false - null); // NaN
//console.log([] + false - null + true); // NaN

//**let y = 1; let x = y = 2; alert(x) */

//let y = 1;
//let x = (y = 2);
//console.log(x); //2

//**alert('1'[0]) */

//console.log('1'[0]); //'1'
//console.log('Привет'[3]); //'в'

//**2 && 1 && null && 0 && undefined */

//console.log(2 && 1 && null && 0 && undefined); //null

//** !!( a && b ) и (a && b) */

//console.log(!!(1 && 2)); //true;
//console.log(1 && 2); //2;

//**alert( null || 2 && 3 || 4 ) */

//console.log(null || (2 && 3) || 4); //3

//**alert( +'Infinity') */

//console.log(+'Infinity'); // Infinity

//** Упражнение по написанию кода 15: Задания на поиск ошибок в коде */
// 1) Функция isOpen не хочет правильно работать. Что мы уже не пробовали подставлять в неё - результат все время неправильный. Необходимо найти причины и исправить.

// 2) Функция isAverageLunchPriceTrue должна брать цены двух любых блюд из меню, складывать их и сравнивать с средним чеком (averageLunchPrice).

// Сейчас функция работает, но постоянно выдает неправильный результат. Ведь из представленного меню сумма двух любых цен всегда будет больше 20. Необходимо найти причину и исправить.

// 3) Функция transferWaitors создана для того, чтобы копировать шаблон данных и передавать их в другой ресторан. Конечно, в другом ресторане будут другие блюда, другие официанты и тп. Сейчас эта функция только в начале разработки и должна менять данные про официантов.

// Но в нынешнем виде мы обнаружили, что после её запуска не только копия данных содержит новых официантов, но и основные данные! В restorantData сотрудник Alice исчезает и заменяется Mike! Необходимо найти причину и немедленно исправить, чтобы данные были разделены.

//const restorantData = {
//	menu: [
//		{
//			name: 'Salad Caesar',
//			price: '14$',
//		},
//		{
//			name: 'Pizza Diavola',
//			price: '9$',
//		},
//		{
//			name: 'Beefsteak',
//			price: '17$',
//		},
//		{
//			name: 'Napoleon',
//			price: '7$',
//		},
//	],
//	waitors: [
//		{ name: 'Alice', age: 22 },
//		{ name: 'John', age: 24 },
//	],
//	averageLunchPrice: '20$',
//	openNow: true,
//};

//function isOpen(prop) {
//	let answer = '';
//	prop ? (answer = 'Открыто') : (answer = 'Закрыто');

//	return answer;
//}

//console.log(isOpen(restorantData.openNow));

//function isAverageLunchPriceTrue(fDish, sDish, average) {
//	if (parseInt(fDish.price) + parseInt(sDish.price) < parseInt(average)) {
//		return 'Цена ниже средней';
//	} else {
//		return 'Цена выше средней';
//	}
//}

//console.log(
//	isAverageLunchPriceTrue(
//		restorantData.menu[0],
//		restorantData.menu[1],
//		restorantData.averageLunchPrice
//	)
//);
//! Неправильное решение. Массивы превращаются в объекты
//function transferWaitors(data) {
//	//const copy = structuredClone(data);

//	const copy = {};
//	for (let key in data) {
//		if (typeof data[key] === 'object') {
//			copy[key] = {};
//			for (let i in data[key]) {
//				copy[key][i] = data[key][i];
//			}
//		} else {
//			copy[key] = data[key];
//		}
//	}

//	copy.waitors[0] = { name: 'Mike', age: 32 };
//	return copy;
//}
//! конец неправильного решения

//! Вот правильное
//function transferWaitors(data) {
//	const copy = Object.assign({}, data);

// Нам просто нужно менять весь массив данных,
// а не лезть напрямую менять каждого из сотрудников
// Так как это верхний уровень объекта, то значение
// будет меняться только у копии
//	copy.waitors = [{ name: 'Mike', age: 32 }];

//	return copy;
//}
//!___________________________

//transferWaitors(restorantData);
//console.log(restorantData);
//console.log(transferWaitors(restorantData));

//** Рекурсия */

//function pow(x, n) {
//	let result = 1;

//	for (let i = 1; i <= n; i++) {
//		result *= x;
//	}
//	return result;
//}

//** вариант */
//function pow(x, n) {
//	if (n === 1) {
//		return x;
//	} else {
//		return x * pow(x, n - 1);
//	}
//}

//console.log(pow(2, 4));
//-----------

//let students = {
//	js: [
//		{
//			name: 'John',
//			progress: 100,
//		},
//		{
//			name: 'Ivan',
//			progress: 60,
//		},
//	],
//	html: {
//		basic: [
//			{
//				name: 'Peter',
//				progress: 20,
//			},
//			{
//				name: 'Ann',
//				progress: 18,
//			},
//		],

//		pro: [
//			{
//				name: 'Sam',
//				progress: 10,
//			},
//		],
//		semi: {
//			students: [
//				{
//					name: 'Test',
//					progress: 100,
//				},
//			],
//		},
//	},
//};

//function getTotalProgressByIteration(data) {
//	let total = 0;
//	let students = 0;

//	for (let course of Object.values(data)) {
//		if (Array.isArray(course)) {
//			students += course.length; // длина объекта соответствует количеству студентов в нем
//			for (let i = 0; i < course.length; i++) {
//				total += course[i].progress;
//			}
//		} else {
//			for (let subCourse of Object.values(course)) {
//				students += subCourse.length;

//				for (let i = 0; i < subCourse.length; i++) {
//					total += subCourse[i].progress;
//				}
//			}
//		}
//	}

//	return total / students;
//}

////console.log(getTotalProgressByIteration(students));

//function getTotalProgressByRecursion(data) {
//	if (Array.isArray(data)) {
//		let total = 0;

//		students += data.length; // длина объекта соответствует количеству студентов в нем
//		for (let i = 0; i < data.length; i++) {
//			total += data[i].progress;
//		}
//		return [total, data.length];
//	} else {
//		let total = [0, 0];

//		for (let subData of Object.values(data)) {
//			const subDataArr = getTotalProgressByRecursion(subData);
//			total[0] += subDataArr[0];
//			total[1] += subDataArr[1];
//		}
//		return total;
//	}
//}

//const result = getTotalProgressByRecursion(students);
//console.log(result[0] / result[1]);

//* Упражнение по написанию кода 16: (*) Задача на рекурсию */

//Напишите функцию, которая вычисляет факториал.

//function factorial(n) {
//	if (typeof n !== 'number' || n === '' || n === null || n % 1 !== 0) {
//		return 'Введите целое положительное число';
//	} else if (n <= 0) {
//		return 1;
//	} else if (n === 1) {
//		return n;
//	} else {
//		return n * factorial(n - 1);
//	}
//}

//* вариант из ответа */

//function factorial(n) {
//	if (typeof n !== 'number' || !Number.isInteger(n)) {
//		return 'Ошибка, проверьте данные';
//	}

//	if (n >= 1) {
//		return n * factorial(n - 1);
//	} else {
//		return 1;
//	}
//}

//console.log(factorial(5));

////console.log(10.1 % 1 !== 0);

//*Упражнение по написанию кода 17
//В каждой книге есть n страниц с номерами страниц от 1 до n. Написать функцию amountOfPages, аргумент которой summary составляется путем сложения количества цифр всех номеров страниц. Эта функция возвращает число - количество страниц n в книге. Чтобы было понятно что такое количество цифр, давайте рассмотрим примеры.

//Пример:

//Если на входе функции summary = 25, то на результат должен быть 17. Всего в числах от 1 до 17 содержится 25 цифр: 1234567891011121314151617.

//Функция на вход как раз принимает это общее количество цифр, а возвращает конечное число, то есть последнюю страницу книги.

//function amountOfPages(summary) {
//	let str = '';
//	for (let i = 1; i <= summary; i++) {
//		str += i;
//		if (str.length < summary) continue;
//		return i;
//	}
//}

//let aaa = amountOfPages(1095);

//console.log(aaa);

//*Упражнение по написанию кода 18
//Панграмма — это предложение, в котором каждая буква алфавита встречается хотя бы по одному разу по возможности без повторений. Например, предложение «The quick brown fox jumps over the lazy dogThe quick brown fox jumps over the lazy dog» является панграммой, поскольку в нем хотя бы один раз используются буквы от A до Z (регистр значения не имеет).

//Напишите функцию isPangram, которая принимает в себя строку и возвращает логическое значение. Если строка является панграммой - вернется true, если нет - false.

function isPangram(string) {
	let strWithoutSpaces = string.split(' ').join('');
	return Array.from(new Set(strWithoutSpaces.toLowerCase())).length == 26;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'));
