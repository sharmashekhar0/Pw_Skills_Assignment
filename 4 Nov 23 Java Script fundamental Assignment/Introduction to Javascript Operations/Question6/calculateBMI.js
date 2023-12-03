function calculateBMI(weight, height) {
	const heightInMeters = height / 100;
	const bmi = weight / (heightInMeters * heightInMeters);
	return bmi;
}

const weightInKg = 70;
const heightInCm = 175;

const resultBMI = calculateBMI(weightInKg, heightInCm);

console.log(`BMI: ${resultBMI.toFixed(2)}`);
