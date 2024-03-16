'use strict';

////запись нового ключа и значения в localStorage
//localStorage.setItem('number', 5);

//// получаем данные из localStorage
//localStorage.getItem('number');
//console.log(localStorage.getItem('number')); // 5

//// удалить данные из localStorage
//localStorage.removeItem('number');
//console.log(localStorage.getItem('number')); // null

//// очистка localStorage
//localStorage.clear();

const checkbox = document.querySelector('#checkbox');
const form = document.querySelector('form');
const change = document.querySelector('#color');

// автоматическая проверка хранилища на наличие галочки в чекбоксе. Должно вернуться или true или null
if (localStorage.getItem('isChecked')) {
	// программно ставим галочку
	checkbox.checked = true;
}

// автоматическая проверка хранилища на наличие записи о цвете формы
if (localStorage.getItem('bg') === 'changed') {
	form.style.backgroundColor = 'red';
}

// сохраняем галочку в чекбоксе при перезагрузке
checkbox.addEventListener('change', () => {
	//при изменении состояния чекбокса мы изменяем в хранилище то, что там будет храниться
	localStorage.setItem('isChecked', true);
});

// работаем с кнопкой изменения цвета
change.addEventListener('click', () => {
	if (localStorage.getItem('bg') === 'changed') {
		localStorage.removeItem('bg');
		form.style.backgroundColor = '#fff';
	} else {
		localStorage.setItem('bg', 'changed');
		form.style.backgroundColor = 'red';
	}
});

//сохраняем свои данные в хранилище
const persone = {
	name: 'Alex',
	age: 25,
};

const serializedPersone = JSON.stringify(persone);
localStorage.setItem('alex', serializedPersone);

console.log(JSON.parse(localStorage.getItem('alex'))); // {name: 'Alex', age: 25}
