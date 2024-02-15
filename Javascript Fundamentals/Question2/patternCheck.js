function isMatch(pattern, str) {
	const regexExp = new RegExp(pattern);

	return regexExp.test(str);
}

console.log(
	isMatch("/abc/", "The latest airplane designs evolved from slabcraft.")
);

console.log(isMatch("^I like", "I like apples"));
console.log(isMatch("apples$", "I like apples"));

console.log(isMatch("^[A-Za-z ]+$", "John Doe"));
console.log(isMatch("^[A-Za-z ]+$", "John_Doe"));
