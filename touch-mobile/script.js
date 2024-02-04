//* События в мобильном браузере
//touchstart - событие срабатывает при возникновении касания к элементу

//touchmove - событие срабатывает при возникновении касания к элементу и движении по экрану

//touchend - событие срабатывает когда палец оторвался от элемента

//touchenter- событие срабатывает когда палец при ведении по экрану наезжает на элемент, на котором весит это событие

//touchleave- наоборот, когда палец покинул элемент, на котором весит это событие

//touchcancel- срабатывает тогда когда точка соприкосновения больше не регистрируется на поверхности элемента

window.addEventListener('DOMContentLoaded', () => {
	const box = document.querySelector('.box');

	box.addEventListener('touchstart', e => {
		e.preventDefault();
		console.log('Start');
		//console.log(e.targetTouches);
		//console.log(e.touches);
	});

	box.addEventListener('touchmove', e => {
		e.preventDefault();
		//console.log('Move');
		console.log(e.targetTouches[0].pageX); // отслеживание координат первого пальца

		//	box.addEventListener('touchend', e => {
		//		e.preventDefault();
		//		console.log('End');
	});
});

// touches - количество пальцев, которые в данный момент взаимодействуют с экраном
// targetTouches - пальцы, которые взаимодействуют конкретно с этим элементом
// changedToches - количество пальцев, участвующих в текущем событии
