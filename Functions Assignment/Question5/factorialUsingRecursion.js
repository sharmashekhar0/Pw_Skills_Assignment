function factorial(num) {
	if (num <= 1) return 1;
	return num * factorial(num - 1);
}

console.log("Factorial of 1 is ", factorial(1));
console.log("Factorial of 2 is ", factorial(2));
console.log("Factorial of 3 is ", factorial(3));
console.log("Factorial of 4 is ", factorial(4));
console.log("Factorial of 5 is ", factorial(5));
console.log("Factorial of 6 is ", factorial(6));
