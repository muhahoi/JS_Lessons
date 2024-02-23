// До применения DIP принципа

class Cash {
	doTransaction(amount: number): void {
		//logic
	}
}

class Shop {
	private cash: Cash;

	constructor(cash: Cash) {
		this.cash = cash;
	}

	doPayment(order: any, amount: number): void {
		this.cash.doTransaction(amount);
	}
}

// После применения DIP принципа

interface DIPPayments {
	doTransaction(amount: number): void;
}

class DIPCash implements DIPPayments {
	doTransaction(amount: number): void {
		//logic
	}
}

class DIPBankCard implements DIPPayments {
	doTransaction(amount: number): void {
		//logic
	}
}

class DIPPayByPhone implements DIPPayments {
	doTransaction(amount: number): void {
		//logic
	}
}

class DIPShop {
	private payments: DIPPayments;

	constructor(payments: DIPPayments) {
		this.payments = payments;
	}

	doPayment(order: any, amount: number): void {
		this.payments.doTransaction(amount);
	}
}
