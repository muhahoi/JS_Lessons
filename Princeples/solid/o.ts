// До применения Open/Closed Principle принципа

class UserCurrencies {
	user: string;

	constructor(user) {
		this.user = user;
	}

	saveCurrencies(settings) {
		if (settings.env.user) {
			// save as user UI
		}

		if (settings.env.admin) {
			// save as admin UI
		}
	}
}

// После применения Open/Closed Principle принципа

interface ISettings {
	env: {
		user: string;
	};
}

interface IUserCurrencies {
	saveCurrencies: (settings: ISettings) => void;
}

class UserCurrenciesInner implements IUserCurrencies {
	user: string;

	constructor(user) {
		this.user = user;
	}

	saveCurrencies: (settings: ISettings) => {
		//....
	};
}

class UserCurrenciesAdmin implements IUserCurrencies {
	user: string;

	constructor(user) {
		this.user = user;
	}

	saveCurrencies: (settings: ISettings) => {
		// another action
	};
}
