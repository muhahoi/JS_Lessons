// До применения KISS принципа
function isPrime(number) {
	if (number <= 1) {
		return false;
	}
	for (let i = 2; i < number; i++) {
		if (number % i === 0) {
			return false;
		}
	}
	return true;
}

// После применения KISS принципа
function isPrime(number) {
	if (number <= 1) {
		return false;
	}
	const sqrtNumber = Math.sqrt(number);
	for (let i = 2; i <= sqrtNumber; i++) {
		if (number % i === 0) {
			return false;
		}
	}
	return true;
}

// ==========================

// До применения KISS принципа
function sortByDiffIn5Mins(arr) {
	return arr.filter((el, i, arr) => {
		return Date.parse(arr?.[i + 1]?.from) - Date.parse(el.from) > 300000;
	});
}

// После применения KISS принципа
function sortObjectsMore5Mins(arr) {
	return [
		...arr.reduce((acc, curr) => {
			if (Date.parse(curr.to) - Date.parse(curr.from) > 300000) {
				acc.push(curr);
				return acc;
			}
			return acc;
		}, []),
	];
}
