function outerFunction(n) {
	const m = 10;
	return function innerFunction() {
		console.log("n + m = ", n + m);
	};
}

const returnedInnerFunction = outerFunction(11);

returnedInnerFunction();
