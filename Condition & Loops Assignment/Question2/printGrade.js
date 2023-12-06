// Question: Write a program that grades students based on their marks.
// -If greater than 90 then A grade
// -If between 70 and 90 then a B grade
// -If between 50 and 70 then a C grade
// -Below 50 then a F grade

const totalMarks = 85;

if (totalMarks > 90) {
	console.log("A Grade");
} else if (totalMarks > 70 && totalMarks <= 90) {
	console.log("B Grade");
} else if ((totalMarks >= 50) & (totalMarks <= 70)) {
	console.log("C Grade");
} else {
	console.log("F Grade");
}
