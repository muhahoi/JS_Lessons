//* Через 2 сек появится 'hello'

//const timerId = setTimeout(function () {
//	console.log('hello');
//}, 2000);

//* то же самое
//const timerId = setTimeout(
//	function (text) {
//		console.log(text);
//	},
//	2000,
//	'hello'
//);

//* еще вариант того же самого

const btn = document.querySelector('.btn');
let timerId,
	i = 0; // счетчик

function myAnimation() {
	const elem = document.querySelector('.box');
	let pos = 0; // позиция, с которой стартует анимация

	const id = setInterval(frame, 10); //запускаем функцию frame каждые 10 миллисекунд

	function frame() {
		if (pos == 300) {
			//определяем что анимация закончилась. 300 - конечное значение. Ширина wrappwer = 400. Ширина блока 100. Ему нужно сместиться 300 раз вниз и вправо
			clearInterval(id);
		} else {
			pos++; //начальную позицию увеличиваем на 1
			elem.style.top = pos + 'px';
			elem.style.left = pos + 'px';
		}
	}
}

btn.addEventListener('click', myAnimation); // триггер анимации frame

//btn.addEventListener('click', () => {
//	//const timerId = setTimeout(logger, 2000); // скобки после logger не ставим
//	timerId = setInterval(logger, 500); // скобки после logger не ставим
//});

//function logger() {
//	if (i === 3) {
//		clearInterval(timerId);
//	}
//	console.log('text');
//	i++;
//}

//let id = setTimeout(function log() {
//	console.log('Hello');
//	id = setTimeout(log, 500);
//}, 500);
