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
		'CCСкотт Пилигрим против...',
	],
};

const adv = document.querySelectorAll('.promo__adv img');

adv.forEach(item => {
	item.remove();
});

const genre = document.querySelector('.promo__genre');
genre.textContent = 'драма';

const promoBg = document.querySelector('.promo__bg');

promoBg.style.cssText = 'background-image: url(../img/bg.jpg)';

const films = document.querySelectorAll('.promo__interactive-item');

films.forEach(item => {
	for (name of ) //**подумать */ */
});
