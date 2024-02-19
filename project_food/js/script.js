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

	//* Modal

	const modalTriggerBtn = document.querySelectorAll('[data-modal]'),
		modalCloseBtn = document.querySelector('[data-close]'),
		modal = document.querySelector('.modal');

	function openModal() {
		modal.classList.add('show');
		modal.classList.remove('hide');
		document.body.style.overflow = 'hidden'; // запрет прокрутки
		clearInterval(modalTimerId); // очищает таймер автоматического откртия модалки, если пользователь сам открыл модальное окно
	}

	modalTriggerBtn.forEach(btn => {
		btn.addEventListener('click', openModal);
	});

	function closeModal() {
		modal.classList.add('hide');
		modal.classList.remove('show');
		document.body.style.overflow = '';
	}

	modalCloseBtn.addEventListener('click', closeModal); // функция добавляется без скобок

	// закрываем модальное окно по клику на пустое место
	modal.addEventListener('click', e => {
		if (e.target === modal) {
			closeModal();
		}
	});

	// закрытие modal по кнопке Escape
	document.addEventListener('keydown', e => {
		if (e.code === 'Escape' && modal.classList.contains('show')) {
			//keycode.info
			closeModal();
		}
	});

	//* запускаем модальное окно с помощью таймера
	//const modalTimerId = setTimeout(openModal, 5000);

	//* появление модалки при прокрутки до конца
	function showModalByScroll() {
		if (
			// длина прокрученной области + высота экрана >= высоте всего сайта
			// - 1 хук, чтобы не было ошибки
			window.pageYOffset + document.documentElement.clientHeight >=
			document.documentElement.scrollHeight - 1
		) {
			openModal();
			window.removeEventListener('scroll', showModalByScroll); //убирается, чтобы больше при прокрутке не появляться, если уже раз появилось
		}
	}

	window.addEventListener('scroll', showModalByScroll);

	//* Используем классы для карточек

	class MenuCard {
		constructor(src, alt, title, descr, price, parentSelector, ...classes) {
			this.src = src;
			this.alt = alt;
			this.title = title;
			this.descr = descr;
			this.price = price;
			this.classes = classes; // массив
			this.parent = document.querySelector(parentSelector);
			this.transfer = 27; // курс доллара к гривне
			this.changeToUAH();
		}

		changeToUAH() {
			this.price = this.price * this.transfer;
		}

		render() {
			const element = document.createElement('div');
			// проверяем указаны ли классы как аргументы конструктора
			if (this.classes.length === 0) {
				this.element = 'menu__item';
				element.classList.add(this.element);
			} else {
				// добавляем каждый класс из this.classes в классы element
				this.classes.forEach(className => element.classList.add(className));
			}
			element.innerHTML = `
									<img src=${this.src} alt=${this.alt}>
					<h3 class="menu__item-subtitle">${this.title}</h3>
					<div class="menu__item-descr">${this.descr}</div>
					<div class="menu__item-divider"></div>
					<div class="menu__item-price">
						<div class="menu__item-cost">Цена:</div>
						<div class="menu__item-total"><span>${this.price}</span> грн/день</div>
					</div>`;

			this.parent.append(element);
		}
	}

	// создаем новый объект и вызываем метод render()
	// объект можем не класть в переменную, тогда когда он используется на месте
	// после вызова обекта он исчезнет и на него не будет ссылок
	new MenuCard(
		'img/tabs/vegy.jpg',
		'vegy',
		'Меню "Фитнес"',
		'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
		9,
		'.menu .container',
		//если нет menu__item, то он добавится автоматом (стр 191 - 193)
		'menu__item',
		'big'
	).render();

	new MenuCard(
		'img/tabs/elite.jpg',
		'elite',
		'Меню “Премиум”',
		'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
		14,
		'.menu .container',
		'menu__item'
	).render();

	new MenuCard(
		'img/tabs/post.jpg',
		'post',
		'Меню "Постное"',
		'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
		21,
		'.menu .container',
		'menu__item'
	).render();
});
