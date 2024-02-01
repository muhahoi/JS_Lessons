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
		'Cкотт Пилигрим против...',
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

const movieList = document.querySelector('.promo__interactive-list');
movieList.innerHTML = '';

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
	movieList.innerHTML += `
	  <li class="promo__interactive-item">${i + 1} ${film}
	  		<div class="delete"></div>
	  </li>
	`;
});

/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

const addButton = document.querySelector('.promo__interactive .add button');
addButton.addEventListener('click', () => {
	movieDB.movies.push('777');
	console.log(movieDB.movies);
});
