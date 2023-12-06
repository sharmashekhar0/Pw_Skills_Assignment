// Question: Generate numbers between any 2 given numbers.
// Ex:
// 	const num1 = 10;
// 	const num2 = 25;
// Output: 11, 12, 13, ... , 25

const num1 = 10;
const num2 = 30;

for (let i = 1; num1 + i <= num2; i++) {
	console.log(`${num1 + i} `);
}
