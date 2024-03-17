'use strict';

//// первый способ создания регулярного выражения (bv ybrnj yt gjkmpetncz)
//new RegExp('pattern', 'flags');

//// второй способ создания
///pattern/f;

// поиск

//const ans = prompt('Введите ваше имя'); // Ann

//* Ищем все маленькие буквы 'n'. Результат 1 или -1
//const reg = /n/;
//* флаги
//! i - ищет вне зависимости от регистра
//! g - ищет несколько вхождений
//! m - многострочный режим

//* Метод .search()
//console.log(ans.search(reg)); // 1
////Если не будет 'n', то выведет -1

//* ищем 'n' независимо от регистра. Вводим ANN
//const reg2 = /n/i;
//console.log(ans.search(reg)); // -1
//console.log(ans.search(reg2)); // 1

//* Метод .match()
//const reg = /n/i; // Ann
//console.log(ans.match(reg)); // ['n', index: 1, input: 'Ann', groups: undefined]

//const reg = /n/gi; // ANN
//console.log(ans.match(reg)); // (2) ['N', 'N']

//* Метод .replace()
//const pass = prompt('Password'); // qwerty
//первый аргумент - то, что мы заменяем
//второй - то, на что заменяем
//  /./ - все входящие символы
// /\./ - чтобы найти отдельную точку надо ее экранировать знаком '\' перед точкой
//console.log(pass.replace(/./g, '*')); // ******
//console.log(pass.replace(/\./g, '*')); // qwerty... -> qwerty***

//* еще пример

//console.log('12-34-56'.replace(/-/g, ':')); // 12:34:56

//* Метод .test()
// проверяет есть ли что-то похожее во вхождении ans на паттерн reg.
// Возвращает true или  false
//const ans = prompt('Введите ваше имя'); // Ann
//const reg = /n/gi;
//console.log(reg.test(ans)); // true

//* классы
//! \d - ищем только цифры
//! \w - ищем только буквы
//! \s - ищем только пробелы

//const ans = prompt('Введите ваше число'); // dfg3434dfgd
//const reg = /\d/;
//console.log(ans.match(reg));
// ['3', index: 5, input: 'dfg3434dfgd', groups: undefined]

//const ans = prompt('Введите ваше число'); // 200px
//const reg = /\d/g;
//console.log(ans.match(reg)); // (3) ['2', '0', '0']
//console.log(ans.match(reg).join('')); // 200

//* пример посложнее

//const str = 'My name is R2D2';

// вырезаем имя
// ищем вхождение, начинающееся с буквы, затем цифра, буква, цифра
// 'i' чтобы не было зависимости от регистра
//console.log(str.match(/\w\d\w\d/i));
// [ 'R2D2', index: 11, input: 'My name is R2D2', groups: undefined ]

//* ищем не числа, не буквы и не пробелы

//! \D - ищем НЕ цифры
//! \W - ищем все символы, кроме букв, цифр и подчеркивания
//! \S - ищем НЕ пробелы

const str = 'My name is R2D2';
//console.log(str.match(/\W/i));
//[ ' ', index: 2, input: 'My name is R2D2', groups: undefined ]
//console.log(str.match(/\W/gi)); // (3) [' ', ' ', ' ']

//* ищем НЕ цифры
console.log(str.match(/\D/gi));
//['M', 'y', ' ', 'n', 'a', 'm', 'e', ' ', 'i', 's', ' ', 'R', 'D'];

//* \W|\d означает "найти любой символ, который не является буквой, цифрой или подчеркиванием, ИЛИ найти любую цифру". Таким образом, это позволяет регулярному выражению находить как пробелы (\W), так и цифры (\d) в строке.
