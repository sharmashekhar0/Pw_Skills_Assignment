function checkEvenOrOdd(number) {
	const result = number % 2 === 0 ? "Even" : "Odd";
	return result;
}

const numberToCheck = 15;
const resultMessage = checkEvenOrOdd(numberToCheck);

console.log(`The number ${numberToCheck} is ${resultMessage}.`);
