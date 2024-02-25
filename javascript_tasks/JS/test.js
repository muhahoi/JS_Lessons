let arrayOfArrays = [[1], null, [5, 6, 7, 8, 9]];

function getLengthOfMissingArray(arrayOfArrays) {
	return !arrayOfArrays ||
		arrayOfArrays.length === 0 ||
		arrayOfArrays.includes(null) ||
		arrayOfArrays.find(item => item.length === 0)
		? 0
		: arrayOfArrays
				.sort((a, b) => a.length - b.length)
				.reduce((acc, curr) => {
					return curr.length - acc.length === 1 ? curr : acc;
				}).length + 1;
}
//
//findMissingArray(arr);
console.log(getLengthOfMissingArray(arrayOfArrays));
