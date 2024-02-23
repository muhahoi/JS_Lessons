// До применения ISP принципа

interface Payments {
	payWebMoney(): void;
	payCreditCard(): void;
	payPhoneNumber(): void;
}

class InternetPaymentService implements Payments {
	payWebMoney(): void {
		//logic
	}
	payCreditCard(): void {
		//logic
	}
	payPhoneNumber(): void {
		//logic
	}
}

class TerminalPaymentService implements Payments {
	payWebMoney(): void {
		//logic
	}
	payCreditCard(): void {
		//logic
	}
	payPhoneNumber(): void {
		//logic
	}
}

// После применения ISP принципа

interface WebMoneyPayment {
	payWebMoney(): void;
}

interface CreditCardPayment {
	payCreditCard(): void;
}

interface PhoneNumberPayment {
	payPhoneNumber(): void;
}

class ISPInternetPaymentService
	implements WebMoneyPayment, CreditCardPayment, PhoneNumberPayment
{
	payWebMoney(): void {
		//logic
	}

	payCreditCard(): void {
		//logic
	}

	payPhoneNumber(): void {
		//logic
	}
}

class ISPTerminalPaymentService implements WebMoneyPayment, CreditCardPayment {
	payWebMoney(): void {
		//logic
	}

	payCreditCard(): void {
		//logic
	}
}
