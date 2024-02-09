function deepCount(a) {
	if (!a.some(elem => Array.isArray(elem))) {
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
