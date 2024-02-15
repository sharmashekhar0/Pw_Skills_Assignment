const digitPattern = /\d/g;
const uppercasePattern = /[A-Z]/g;
const lowercasePattern = /[a-z]/g;
const specialCharPattern = /[^A-Za-z0-9]/g;

function findCharacterClasses(str) {
	return {
		digits: str.match(digitPattern),
		uppercaseLetters: str.match(uppercasePattern),
		lowercaseLetters: str.match(lowercasePattern),
		specialCharacters: str.match(specialCharPattern),
	};
}

let result = findCharacterClasses("Hello! How are you? 123");

console.log("Digits:", result.digits);
console.log("Uppercase Letters:", result.uppercaseLetters);
console.log("Lowercase Letters:", result.lowercaseLetters);
console.log("Special Characters:", result.specialCharacters);
