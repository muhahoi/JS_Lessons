//function powqa(x, n) {
//	if (n === 1) {
//		return x;
//	} else {
//		return x * powqa(x, n - 1);
//	}
//}

//console.log(powqa(2, 4));

function deepCount(a) {
	if (!Array.isArray(a) || !a.some(elem => Array.isArray(elem))) {
		return a.length;
	} else {
		return a.reduce(function (acc, val) {
			return acc + (Array.isArray(val) ? deepCount(val) + 1 : 1);
		}, 0);
	}
}
console.log(deepCount([1, 5, 3])); // 3
console.log(deepCount(['1', 5, '3', ['10']])); // 5
console.log(deepCount([1, 2, [3, 4, [5]]])); // 7
console.log(deepCount([])); // 0
console.log(deepCount([[[[[[[[[]]]]]]]]])); // 8
