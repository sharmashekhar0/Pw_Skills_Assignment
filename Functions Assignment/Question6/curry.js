function curry(fn) {
	return function curried(...args) {
		if (args.length >= fn.length) {
			return fn(...args);
		} else {
			return function (...moreargs) {
				return curried(...args, ...moreargs);
			};
		}
	};
}

function addTwoNumbers(a, b) {
	return a + b;
}

const curriedAdd = curry(addTwoNumbers);

const result = curriedAdd(2)(3);
console.log("Result = ", result);
