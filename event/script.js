const btn = document.querySelector('button');

//btn.onclick = function () {//**не использовать */
//	alert('click');
//};

//btn.addEventListener('click', () => { //**правильно! */
//	alert('Click');
//});

//btn.addEventListener('mouseenter', () => {
//	console.log('hover');
//});

btn.addEventListener('mouseenter', e => {
	console.log(e.target); //<button id="btn">Нажми меня</button>
	e.target.remove(); // удаляет кнопку после наведения
});
