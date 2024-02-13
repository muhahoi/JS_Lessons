'use strict';

const box = document.querySelector('.box');

//создаем сущность, которая следит за элементом
let observer = new MutationObserver(mutationRecords => {
	console.log(mutationRecords); // покажет массив всех изменений объекта
});

//настраиваем слежение за определенным элементом и если что-то меняется, то выполняется функция
observer.observe(box, {
	childList: true,
});

observer.disconnect();
