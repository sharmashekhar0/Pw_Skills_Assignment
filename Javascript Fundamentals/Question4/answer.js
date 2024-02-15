function extractDateParts(pattern, str) {
	let regex = new RegExp(pattern);
	let match = regex.exec(str);

	if (match) {
		return {
			day: match[1],
			month: match[2],
			year: match[3],
		};
	} else {
		return null;
	}
}

let dateString = "Today is 14-02-2024";
let pattern = /(\d{2})-(\d{2})-(\d{4})/;
let dateParts = extractDateParts(pattern, dateString);

if (dateParts) {
	console.log("Day:", dateParts.day);
	console.log("Month:", dateParts.month);
	console.log("Year:", dateParts.year);
} else {
	console.log("No match found.");
}
