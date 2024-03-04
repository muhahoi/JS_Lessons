'use script';

//console.log('Запрос данных...');

////в функции всегда 2 аргумента функции resolve и reject
////resolve - означает, что что-то выполнилось правильно
////reject - означает, что обещание не выполнилось и что-то пошло не так
//const req = new Promise(function (resolve, reject) {
//	setTimeout(() => {
//		console.log('Подготовка данных');

//		const product = {
//			name: 'TV',
//			price: 2000,
//		};

//		resolve(product);
//	}, 2000);
//});

////метод then, который выполняется на промисе в случае положительного исхода т.е. это функция resolve()
//req
//	.then(product => {
//		return new Promise((resolve, reject) => {
//			setTimeout(() => {
//				product.status = 'order';
//				resolve(product);
//				//reject(); //для ошибки (выполнится catch)
//			}, 2000);
//		});
//	})
//	.then(data => {
//		data.modify = true;
//		return data;
//	})
//	.then(data => {
//		console.log(data);
//	})
//	.catch(() => {
//		console.error('Произошла ошибка');
//	})
//	.finally(() => {
//		// сработает в любом случае
//	console.log('Finnaly');
//});

//* еще 2 метода промисов
// создаем переменную test - функция, принимающая аргумент time, и внутри будем возвращать новый промис, который зарезолвится через определенное количество времени time
const test = time => {
	return new Promise(resolve => {
		// иногда можно reject не передавать как аргумент, если он не нужен, что бывает редко
		//внутри запускаем setTimeout как асинхронную версию нашего кода, в которой будет выполняться resolve через time
		setTimeout(() => resolve(), time);
	});
};

//test(1000).then(() => console.log('1000 ms')); //clg и есть resolve
//test(1000).then(() => console.log('2000 ms')); //clg и есть resolve

//Используем Промис как глобальный объект с методом all,принимающий в себя массив с промисами
//Promise.all служит для того чтобы мы убедились, что все наши промисы уже выполнились и только тогда что-то делает
Promise.all([test(1000), test(2000)]).then(() => {
	console.log('All');
});

//Promise.race выполняется определенная операция после выполнения первого удачного промиса
Promise.race([test(1000), test(2000)]).then(() => {
	console.log('All');
});
