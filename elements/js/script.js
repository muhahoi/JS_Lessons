'use strict';
//** Урок 1: Получение элементов со страницы */
//const box = document.getElementById('box');
////console.log(box);

//const btn2 = document.getElementsByTagName('button')[1]; //вторая кнопка
////console.log(btn2);

////!-------когда выбраны все кнопки----------

//const btns = document.getElementsByTagName('button'); //все кнопки с тегом button
////console.log(btns[3]); //четвертая кнопка из всех

////! даже если один элемент с таким тегом, то все равно надо указывать индекс. В этом случае [0]
////!------------------------------

//const circles = document.getElementsByClassName('circle');
////console.log(circles);

//const hearts = document.querySelectorAll('.heart'); // находит все элементы . hearts. У него есть метод forEach
////console.log(hearts);

//hearts.forEach(item => {
//	//console.log(item);
//});

//const oneHeart = document.querySelector('.heart'); // находит только первый элемент с этим классом
////console.log(oneHeart);

//const firstDiv = document.querySelector('div');
//console.log(firstDiv);

//** Урок 2: Действия с элементами на странице */

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const wrapper = document.querySelector('.wrapper');
//const hearts = document.querySelectorAll('.heart');
//можно записать вместо document wrapper т.к. .heart лежат внутри него
const hearts = wrapper.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');

//box.style.backgroundColor = 'blue';
//box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'blue';

//** Перебор элементов в псевдомассиве с помощью for...let */
//for (let i = 0; i < hearts.length; i++) {
//	hearts[i].style.backgroundColor = 'blue';
//}

//** Перебор элементов в псевдомассиве с помощью forEach - только для querySelectorAll */
hearts.forEach(item => {
	item.style.backgroundColor = 'blue';
});

//** Создание элементов на странице */

const div = document.createElement('div'); // создается только в файле js, пока не появляется на странице
//const text = document.createTextNode('Тут был я'); // используется редко

div.classList.add('black'); // класс взят из css
//document.body.append(div); // добавили div в конец body

//** */ добавление элемента используя селектор
//document.querySelector('.wrapper').append(div);

//** */ если создать переменную wrapper, то можно записать так
wrapper.append(div); // добавляем div в конец блока
//wrapper.appendChild(div); // то же самое, но устаревшее использование

//wrapper.prepend(div); // добавляем div в начало блока

//** добавление элемента перед определенным элементом */
//hearts[0].before(div);
//wrapper.insertBefore(div, hearts[0]); // то же самое, но устаревшее использование
//** добавление элемента после определенного элемента */
//hearts[0].after(div);

//** удаление элемента */
//circles[0].remove();
//wrapper.removeChild(hearts[0]); // то же самое, но устаревшее использование

//** замена элемента другим элементом */
//hearts[0].replaceWith(btns[0]);
//wrapper.replaceChild(btns[0], hearts[0]); // то же самое, но устаревшее использование

//** Добавляем текст в блок div */
div.innerHTML = '<h1>Hello World!</h1>'; //можно добавить HTML структуру
//второй способ
//div.textContent = 'Hello'; //HTML структуру нельзя добавить. Необходима для получения текста от пользователя

//**работа с элементом */
//div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>'); //beforebegin вставляет код перед элементом
//div.insertAdjacentHTML('afterbegin', '<h2>Привет</h2>'); //beforebegin вставляет код в начало нашего элемента
div.insertAdjacentHTML('beforeend', '<h2>Привет</h2>'); //beforebegin вставляет код перед концом нашего элемента
div.insertAdjacentHTML('afterend', '<h2>Привет</h2>'); //beforebegin вставляет код после элемента
