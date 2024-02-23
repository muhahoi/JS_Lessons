'use strict';
/*Дан массив данных с таймметками:
Написать функцию, которая создаст внутри существующего массива подмассив с объектами, продолжительность которых больше 5ти минут. То есть, разница времени между from и to будет больше 5 мин. Исходный массив не изменяется, расположение подмассива по индексу не важно.*/

const data = [
	{
		from: '2023-05-30T00:00:00.000',
		to: '2023-05-30T05:56:28.000',
	},
	{
		from: '2023-05-30T05:56:28.000',
		to: '2023-05-30T05:57:10.000',
	},
	{
		from: '2023-05-30T05:57:01.000',
		to: '2023-05-30T05:58:31.000',
	},
	{
		from: '2023-05-30T05:58:31.800',
		to: '2023-05-30T07:54:21.000',
	},
	{
		from: '2023-05-30T07:04:21.000',
		to: '2023-05-30T07:05:26.000',
	},
	{
		from: '2023-05-30T07:05:26.800',
		to: '2023-05-30T08:27:42.000',
	},
	{
		from: '2023-05-30T08:27:42.000',
		to: '2023-05-30T08:28:52.000',
	},
	{
		from: '2023-05-30T08:29:43.000',
		to: '2023-05-30T08:31:28.000',
	},
	{
		from: '2023-05-30T08:31:28.000',
		to: '2023-05-30T10:19:15.000',
	},
	{
		from: '2023-05-30T10:19:15.000',
		to: '2023-05-30T10:21:02.000',
	},
	{
		from: '2023-05-30T10:21:02.000',
		to: '2023-05-30T16:50:26.000',
	},
	{
		from: '2023-05-30T16:50:26.000',
		to: '2023-05-30T16:50:49.000',
	},
];

function createSubArrObjectsMore5Mins(array) {
	const newArr = [...array];
	const arr = [];
	for (let key of array) {
		if (Date.parse(key.to) - Date.parse(key.from) > 300000) {
			arr.push(key);
		}
	}
	newArr.push(arr);
	return newArr;
}
console.log(createSubArrObjectsMore5Mins(data));

/*Написать функцию, которая вернет только массив объектов, продолжительность которых больше 5ти минут. Ориентироваться на результат:*/

//function getInterval(array) {
//	const arr = [];
//	for (let key of array) {
//		let interval = Date.parse(key.to) - Date.parse(key.from);
//		if (interval > 300000) {
//			arr.push(key);
//		}
//	}
//	return arr;
//}

//console.log(getInterval(data));

function createSubArrObjectsMore5Mins(arr) {
	return [
		...arr,
		arr.reduce((acc, curr) => {
			if (Date.parse(curr.to) - Date.parse(curr.from) > 300000) {
				acc.push(curr);
			}
			return acc;
		}, []),
	];
}
