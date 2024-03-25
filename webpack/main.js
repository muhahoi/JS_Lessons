//! commonJS
function myModule() {
	this.hello = function () {
		console.log('Hello!');
	};

	this.goodbye = function () {
		console.log('Bye!');
	};
}

//* экспортирование модуля myModule в  script.js

module.exports = myModule;
