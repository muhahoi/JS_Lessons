'use strict';

const inputRub = document.querySelector('#rub');
const inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
	const request = new XMLHttpRequest();

	// метод .open()собирает настройки, которые помогут в будущем сделать запрос
	//request.open(method, url, async, login, pass);
	request.open('GET', 'js/current.json'); // остальные аргументы не задаем

	// говорим, что именно отправляем(картинка, json и тд). HTTP-Заголовки
	request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

	// теперь можем отправить запрос
	request.send();

	//получаем ответ от сервера и что-то с ними делаем
	// status (200, 400 и тд)
	// statusText (текстовое описание статуса)
	// response (ответ от сервера, который задал бэкенд-разработчик)
	// readyState текущее состояние нашего запроса

	// событие отслеживает статус готовности нашего запроса в данный текущий момент. Следит за свойством readyState
	//	request.addEventListener('readystatechange', () => {
	//		if (request.readyState === 4 && request.status === 200) {
	//			console.log(request.response);
	//			const data = JSON.parse(request.response);
	//			inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
	//			//.toFixed(2) - два знака после точки
	//		} else {
	//			inputUsd.value = 'Что-то пошло не так';
	//		}
	//	});
	//});

	//Следит за свойством load. Оно срабатывает один раз когда запрос уже полностью готов
	request.addEventListener('load', () => {
		if (request.status === 200) {
			const data = JSON.parse(request.response);
			inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
			//.toFixed(2) - два знака после точки
		} else {
			inputUsd.value = 'Что-то пошло не так';
		}
	});
});
