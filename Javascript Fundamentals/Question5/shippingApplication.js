function calculateDeliveryTime(packageType) {
	let deliveryTime;

	switch (packageType) {
		case "standard":
			deliveryTime = "3-5 days";
			break;
		case "express":
			deliveryTime = "1-2 days";
			break;
		case "overnight":
			deliveryTime = "next day";
			break;
		default:
			deliveryTime = "unknown";
	}

	return deliveryTime;
}

console.log(
	"Estimated delivery time for standard package:",
	calculateDeliveryTime("standard")
);
console.log(
	"Estimated delivery time for express package:",
	calculateDeliveryTime("express")
);
console.log(
	"Estimated delivery time for overnight package:",
	calculateDeliveryTime("overnight")
);
console.log(
	"Estimated delivery time for unknown package:",
	calculateDeliveryTime("unknown")
);
