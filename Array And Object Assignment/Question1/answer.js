const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

if (!shoppingCart.includes("Meat")) {
	shoppingCart.unshift("Meat");
}

if (!shoppingCart.includes("Sugar")) {
	shoppingCart.push("Sugar");
}

const allergicToHoney = true;
if (allergicToHoney) {
	const indexToRemove = shoppingCart.indexOf("Honey");
	if (indexToRemove !== -1) {
		shoppingCart.splice(indexToRemove, 1);
	}
}

const teaIndex = shoppingCart.indexOf("Tea");
if (teaIndex !== -1) {
	shoppingCart[teaIndex] = "Green Tea";
}

console.log(shoppingCart);
