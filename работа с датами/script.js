'use strict';

//* ПОЛУЧЕНИЕ ДАТЫ
//const now = new Date(); // 2024-02-10T21:20:34.836Z текущая дата

//* добавляем параметры
//const now = new Date('2024-02-10'); // 2024-02-10T00:00:00.000Z текущая дата, время сброшено по дефолту в 0

//const now = new Date(2024, 2, 10, 20); // 2024-03-10T17:00:00.000Z
// 03 потому что отсчет месяцев начинается с 0
// 17 потому что учитываются часовые пояса

//console.log(now.getFullYear()); // 2024
//console.log(now.getMonth()); // 1 - февраль
//console.log(now.getDate()); // 11
//console.log(now.getHours()); // 0
//console.log(now.getUTCHours()); // 21 время по UTC
//console.log(now.getDay()); // 0 нумерация начинается с воскресенья
//console.log(now.getTimezoneOffset()); // -180 разница в минутах с UTC
//console.log(now.getTime()); // количество миллисекунд с 1970 года

//* УСТАНОВКА ДАТЫ

const now = new Date();
//console.log(now.setHours(18));
//console.log(now); // 18 часов будет в браузере, в консоли будет 15 в формате UTC
// браузер Sun Feb 11 2024 18:00:19 GMT+0300 (Москва, стандартное время)
// vs code 2024-02-11T15:36:23.349Z
// текущее время 14:36

//console.log(now.setHours(18, 40));
//console.log(now);
//браузер Sun Feb 11 2024 18:40:03 GMT+0300 (Москва, стандартное время)

//* ИЗМЕРЕНИЕ ПРОМЕЖУТКА ВРЕМЕНИ

let start = new Date();

for (let i = 0; i < 100000; i++) {
	let some = i ** 3;
}

let end = new Date();

alert(`Цикла отработал за ${end - start} миллисекунд`);
