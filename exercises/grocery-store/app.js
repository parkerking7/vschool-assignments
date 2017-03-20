var shopper = {
	name: "Parker",
	age: 19,
	isStudent: true,
	groceryCart: ["Apples", "Oranges", "Strawberries"],
	whyAreYouHere: function () {
		return ("I need " + this.groceryCart[0] + ", " + this.groceryCart[1] + "," + " and " + this.groceryCart[2]);
	}
};

shopper.whyAreYouHere(); 