function powqa(x, n) {
	if (n === 1) {
		return x;
	} else {
		return x * powqa(x, n - 1);
	}
}

console.log(powqa(2, 4));
