// До применения YAGNI принципа
function calculateAreaOfRectangle(length, width) {
	let area = length * width;
	let perimeter = 2 * (length + width);
	return { area, perimeter };
}

// После применения YAGNI принципа
function calculateAreaOfRectangle(length, width) {
	let area = length * width;
	return area;
}
