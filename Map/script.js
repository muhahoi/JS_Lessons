'use strict';

const user = {
	name: 'Alex',
	surname: 'Smith',
	birthday: '20/04/1993',
	showMyPublicData: function () {
		console.log(`${this.name} ${this.surname}`);
	},
};
//console.log(typeof Object.keys(user)[0]);
//*делаем из объекта map
const userMap = new Map(Object.entries(user));
//console.log(userMap);

//* делаем object из map
const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj);

const shops = [{ rice: 500 }, { oil: 200 }, { bread: 50 }];

const budget = [5000, 15000, 25000];

const map = new Map([[{ paper: 400 }, 8000]]);

map.set(shops[0], 5000);
map.set(shops[1], 15000);
map.set(shops[2], 25000);

//console.log(map); //Map(4) { { paper: 400 } => 8000, { rice: 500 } => 5000, { oil: 200 } => 15000, { bread: 50 } => 25000}
//console.log(map.get(shops[0])); //5000
//console.log(map.has(shops[0])); //true
//map.delete(key);
//map.clear();
//map.size;
//map.keys();

//console.log(map.keys()); // [Map Iterator] { { paper: 400 }, { rice: 500 }, {oil: 200 },  { bread: 50 }}

//for (let shop of map.keys()) {
//	console.log(shop); //{ paper: 400 }	{rice: 500;	}	{	oil: 200;	}	{	bread: 0;	}
//}

//* получаем ключи
//const goods = [];

//for (let shop of map.keys()) {
//	//goods.push(Object.keys(shop)); // [ [ 'paper' ], [ 'rice' ], [ 'oil' ], [ 'bread' ] ]
//	goods.push(Object.keys(shop)[0]); // [ 'paper', 'rice', 'oil', 'bread' ]
//}

//console.log(goods);

//* получаем значения

//for (let price of map.values()) {
//	console.log(price);
//* вывод
//	//8000;
//	//5000;
//	//15000;
//	//25000;
//}

//* получаем массив объектов

//for (let price of map.entries()) {
//	console.log(price);
//	//* вывод 3 способ
//	//[{ paper: 400 }, 8000]
//	//[({ rice: 500 }, 5000)]
//	//[({ oil: 200 }, 15000)]
//	//[({ bread: 50 }, 25000)];
//}

//for (let [shop, price] of map.entries()) {
//	console.log(shop, price);
//* вывод
//{paper: 400;}	8000;
//{rice: 500;}	5000;
//{oil: 200;}	15000;
//{bread: 50;}	25000;
//}

//* 4й способ

//map.forEach((value, key, map) => {
//	console.log(key, value);
//* вывод
//{paper: 400;}	8000;
//{rice: 500;}	5000;
//{oil: 200;}	15000;
//{bread: 50;}	25000;
//});
