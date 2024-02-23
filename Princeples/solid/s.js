// До применения Single Responsibility Principle принципа

class UserCurrencies {
	constructor(user) {
		this.user = user;
	}

	saveCurrencies(settings) {
		// Логика сохранения курса валют
	}

	displayCurrencies() {
		// Логика отображения курса валют
	}

	applyCurrencies(settings) {
		// Логика применения курса валют
	}
}

// После применения Single Responsibility Principle принципа

class UserCurrencies {
	constructor(user) {
		this.user = user;
	}

	saveCurrencies(settings) {
		// Логика сохранения курса валют
	}
}

class CurrenciesUI {
	constructor(currencies) {
		this.currencies = currencies;
	}

	displayCurrencies() {
		// Логика отображения курса валют
	}

	applyCurrencies(settings) {
		// Логика применения курса валют
	}
}
