const btns = document.querySelectorAll('button'),
	wrapper = document.querySelector('.btn-block');
console.log(btns[0].classList.length); // 2 у первой кнопки два класса
console.log(btns[0].classList.item(0)); // blue
console.log(btns[1].classList.add('red')); // у первой кнопки появится класс red
console.log(btns[0].classList.add('red', 'white')); // можно добавить несколько классов
console.log(btns[0].classList.remove('blue')); // удаляет у первой кнопки класс blue
console.log(btns[0].classList.toggle('blue')); // если класса нет, то он появится и наоборот

//* проверяем есть ли класс или нет

if (btns[1].classList.contains('red')) {
	// проверяет есть ли такой класс и возвращает булиновое значение
	console.log('red');
}

//* кнопка будет менять цвет по клику
btns[0].addEventListener('click', () => {
	//	if (!btns[1].classList.contains('red')) {
	//		btns[1].classList.add('red');
	//	} else {
	//		btns[1].classList.remove('red');
	//	}

	//* с использованием toggle

	btns[1].classList.toggle('red');
});

//* Делегирование событий
//с помощью forEach делегирование не получится
wrapper.addEventListener('click', event => {
	//console.dir(event.target); // button.red
	if (event.target && event.target.tagName == 'BUTTON') {
		console.log('hello');
	}
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);
