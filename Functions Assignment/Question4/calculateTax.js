function calculateTax(income) {
	function getTaxRate() {
		if (income <= 50000) {
			return 0.1;
		} else if (income <= 100000) {
			return 0.15;
		} else {
			return 0.2;
		}
	}

	return function (income) {
		const taxRate = getTaxRate();
		const taxAmount = income * taxRate;
		return taxAmount;
	};
}

const calculateTaxForIncome = calculateTax();

const income = 40000;
const tax = calculateTaxForIncome(income);
console.log(`Tax for income $${income}: $${tax}`);
