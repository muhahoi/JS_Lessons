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

//btn.addEventListener('mouseenter', e => {
//	console.log(e.target); //<button id="btn">Нажми меня</button>
//	e.target.remove(); // удаляет кнопку после наведения
//});
//**** */
//let i = 0;
//const deletElem = e => {
//	console.log(e.target); //<button id="btn">Нажми меня</button>
//	//e.target.remove(); // удаляет кнопку после наведения
//	i++;
//	if (i == 1) {
//		btn.removeEventListener('click', deletElem);
//	}
//};

//btn.addEventListener('click', deletElem);
//**** //

const overlay = document.querySelector('.overlay');
const deletElem = e => {
	console.log(e.currentTarget);
	console.log(e.type);
};
//btn.addEventListener('click', deletElem);
//overlay.addEventListener('click', deletElem);

const link = document.querySelector('a');
link.addEventListener('click', event => {
	event.preventDefault(); //отмена стандартного поведения браузера. Должен быть написан самым первым в обработчике
	console.log(event.target);
});

//** повесить обработчик событий на псевдомассив элементов */

const btns = document.querySelectorAll('button');
btns.forEach(btn => {
	btn.addEventListener('click', deletElem, { once: true });
});
