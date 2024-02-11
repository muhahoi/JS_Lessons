window.addEventListener('DOMContentLoaded', () => {
	//* Tabs

	const tabs = document.querySelectorAll('.tabheader__item');
	const tabParent = document.querySelector('.tabheader__items');
	const tabContent = document.querySelectorAll('.tabcontent');

	function hideTabContent() {
		tabContent.forEach(item => {
			item.classList.add('hide');
			item.classList.remove('show', 'fade');
		});

		tabs.forEach(item => {
			item.classList.remove('tabheader__item_active');
		});
	}

	function showTabContent(i = 0) {
		tabContent[i].classList.add('show', 'fade');
		tabContent[i].classList.remove('hide');
		tabs[i].classList.add('tabheader__item_active');
	}

	hideTabContent();
	showTabContent();

	tabParent.addEventListener('click', event => {
		const target = event.target;
		if (target && target.classList.contains('tabheader__item')) {
			tabs.forEach((item, i) => {
				if (item == target) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});

	//* Timer

	const deadline = '2024-02-15';

	// функция определяет разницу между deadline и  текущим временем
	function getTimeRemaining(endtime) {
		let days, hours, minutes, seconds;
		//считаем разницу между датами
		const t = Date.parse(endtime) - Date.parse(new Date());
		// Date.parse(endtime) - получаем количество миллисекунд, которое будет в нашем конечном времени endtime
		// Date.parse(new Date()) - // - текущее время

		if (t <= 0) {
			// если дата deadline в прошлом
			days = 0;
			hours = 0;
			minutes = 0;
			seconds = 0;
		} else {
			(days = Math.floor(t / (1000 * 60 * 60 * 24))), // количество суток до deadline
				(hours = Math.floor((t / (1000 * 60 * 60)) % 24)),
				(minutes = Math.floor((t / 1000 / 60) % 60)),
				(seconds = Math.floor((t / 1000) % 60));
		}

		return {
			total: t,
			days: days,
			hours: hours,
			minutes: minutes,
			seconds: seconds,
		};
	}

	//функция, добавляющая 0 когда один символ в числе
	function getZero(num) {
		if (num >= 0 && num < 10) {
			return `0${num}`;
		} else {
			return num;
		}
	}

	// функция устанавливает таймер на страницу
	function setClock(selector, endtime) {
		const timer = document.querySelector(selector), // сюда будем передавать класс .timer
			days = timer.querySelector('#days'),
			hours = timer.querySelector('#hours'),
			minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds'),
			timeInterval = setInterval(updateClock, 1000);

		updateClock(); // запускаем сразу, чтобы при загрузке страницы уже запустился таймер не дожидаясь 1 сек

		//функция обновляет таймер каждую секунду
		function updateClock() {
			const t = getTimeRemaining(endtime);

			days.innerHTML = getZero(t.days);
			hours.innerHTML = getZero(t.hours);
			minutes.innerHTML = getZero(t.minutes);
			seconds.innerHTML = getZero(t.seconds);

			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
		}
	}

	setClock('.timer', deadline);
});
