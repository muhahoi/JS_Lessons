/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
	movies: [
		'Логан',
		'Лига справедливости',
		'Ла-ла лэнд',
		'Одержимость',
		'Скотт Пилигрим против...',
		'ббб',
		'ddd',
	],
};

const adv = document.querySelectorAll('.promo__adv img');

adv.forEach(item => {
	item.remove();
});

const genre = document.querySelector('.promo__genre');
genre.textContent = 'драма';

const poster = document.querySelector('.promo__bg');

poster.style.cssText = 'background-image: url(../img/bg.jpg)';

// Задача 2: Настроил сортировку в существующем массиве
movieDB.movies = movieDB.movies.map(item => item.toUpperCase()).sort();

const movieList = document.querySelector('.promo__interactive-list');

//Задача 2: перенес код в функцию для переиспользования
function createList() {
	movieList.innerHTML = '';
	movieDB.movies.forEach((film, i) => {
		movieList.innerHTML += `
	<li class="promo__interactive-item">${i + 1} ${film}
	<div class="delete"></div>
	</li>
	`;
	});
}
createList();

// Задача 2: Получил элемент поля ввода
const inputElement = document.querySelector(
	'.promo__interactive .add input[type="text"]'
);

// Задача 2: Получил элемент кнопки ввода
const inputButton = document.querySelector('.promo__interactive .add button');

// Задача 2: При клике должна запускаться функция добавления фильма
inputButton.addEventListener('click', () => {
	event.preventDefault();
	let name = inputElement.value.toUpperCase();
	if (name.length > 21) {
		name = name.slice(0, 21) + '...';
	}

	// проверка введено ли что-то
	if (inputElement.value && !movieDB.movies.includes(name)) {
		addMovie();
	} else {
		inputElement.value = '';
	}
});

// Задача 2: Функция добавления фильма
function addMovie() {
	event.preventDefault(); //отключаю стандартное поведение браузера
	let movieName = inputElement.value.slice(0, 21).toUpperCase();
	if (inputElement.value.length > 21) {
		movieName += '...';
	}
	movieDB.movies.push(movieName); // добавляю в массив содержимое поля ввода
	movieDB.movies.sort(); // снова сортировка

	createList(); //создаю заново список фильмов
	inputElement.value = ''; // очищаю поле ввода после нажатия кнопки
}

// Задача 2: Получил элемент кнопки удаления
const deleteButton = document.querySelectorAll('.delete');

movieList.addEventListener('click', event => {
	if (event.target.classList.contains('delete')) {
		// вот это долго не мог отловить, помог gpt
		deleteMovie(event.target.previousSibling);
	}
});

function deleteMovie(name) {
	const str = name.textContent.slice(2, -2); //удалил нумерацию с пробелом и два пустых символа в конце
	const index = movieDB.movies.indexOf(str);
	movieDB.movies.splice(index, 1);
	createList();
}

// галочка
const checkbox = document.querySelector('input[type="checkbox"]');
checkbox.addEventListener('click', event => {
	if (checkbox.checked) {
		console.log('Добавляем любимый фильм');
	}
});
