'use strict';

//class Rectangle {
//	constructor(height, width) {
//		this.height = height;
//		this.width = width;
//	}

//	calcArea() {
//		return this.height * this.width;
//	}
//}

//// новый класс будет наследовать свойства и методы от первого класса
//class ColoredRectanglWithText extends Rectangle {
//	// extends = "наследуется от"
//	constructor(height, width, text, bgColor) {
//		super(height, width); // указываем только нужные свойства
//		// super вызывает супер-конструктор родителя (то же самое, что было у родителя (5 и 6 строки))
//		// super должна быть в первой строке
//		this.text = text;
//		this.bgColor = bgColor;
//	}

//	showMyProps() {
//		console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
//	}
//}

////const square = new Rectangle(10, 10);
////const long = new Rectangle(20, 100);

////console.log(square.calcArea()); // 100
////console.log(long.calcArea()); // 2000

//const div = new ColoredRectanglWithText(25, 10, 'Hello world', 'red');
//div.showMyProps(); // Текст: Hello world, цвет: red
//console.log(div.calcArea()); // 250

////* добавление метода
//Rectangle.prototype.getPerimeter = function () {
//	return 2 * (this.height + this.width);
//};

//const square = new Rectangle(10, 10);
//console.log(square.getPerimeter()); //40

//Rectangle.prototype.getPerimeter = function () {
//	return 3 * (this.height + this.width);
//};

//console.log(square.getPerimeter());
