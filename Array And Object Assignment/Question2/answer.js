const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array
ages.sort((a, b) => a - b);

// Find min and max age
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

// Find median age
let medianAge;
const middleIndex = Math.floor(ages.length / 2);
if (ages.length % 2 === 0) {
	medianAge = (ages[middleIndex - 1] + ages[middleIndex]) / 2;
} else {
	medianAge = ages[middleIndex];
}

// Find average age
const sumAges = ages.reduce((acc, age) => acc + age, 0);
const averageAge = sumAges / ages.length;

// Find range of ages
const range = maxAge - minAge;

// Compare min - average and max - average
const minAverageDiff = Math.abs(minAge - averageAge);
const maxAverageDiff = Math.abs(maxAge - averageAge);

console.log("Sorted Ages:", ages);
console.log("Min Age:", minAge);
console.log("Max Age:", maxAge);
console.log("Median Age:", medianAge);
console.log("Average Age:", averageAge);
console.log("Range of Ages:", range);
console.log("Absolute difference between Min and Average:", minAverageDiff);
console.log("Absolute difference between Max and Average:", maxAverageDiff);
