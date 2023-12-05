function checkNumberType(number) {
	const result = number > 0 ? "positive" : number < 0 ? "negative" : "zero";
	return result;
}

console.log(checkNumberType(7));
console.log(checkNumberType(-3));
console.log(checkNumberType(0));
