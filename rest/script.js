const log = function (a, b, ...rest) {
	console.log(a, b, rest);
};
//rest оператор собирает всё оставшееся в массив

log('basic', 'rest', 'operator', 'usage');
// basic rest [ 'operator', 'usage' ]

//* параметры по умолчанию

function calcOrDouble(number, basis = 2) {
	console.log(number * basis);
}

calcOrDouble(3, 5); // 15
calcOrDouble(3); // 6
