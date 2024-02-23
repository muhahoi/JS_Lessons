// До применения LSP принципа

class Rectangle {
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}

	setWidth(width) {
		this.width = width;
	}

	setHeight(height) {
		this.height = height;
	}

	getArea() {
		return this.width * this.height;
	}
}

class Square extends Rectangle {
	setWidth(width) {
		this.width = width;
		this.height = width;
	}

	setHeight(height) {
		this.width = height;
		this.height = height;
	}
}

// После применения LSP принципа

class Shape {
	getArea() {
		throw new Error("Метод getArea() должен быть переопределен");
	}
}

class Rectangle extends Shape {
	constructor(width, height) {
		super();
		this.width = width;
		this.height = height;
	}

	setWidth(width) {
		this.width = width;
	}

	setHeight(height) {
		this.height = height;
	}

	getArea() {
		return this.width * this.height;
	}
}

class Square extends Shape {
	constructor(side) {
		super();
		this.side = side;
	}

	setSide(side) {
		this.side = side;
	}

	getArea() {
		return this.side * this.side;
	}
}
